import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Nav  } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AngularFireAuth } from 'angularfire2/auth';

import { AlertController } from 'ionic-angular';

import { UserVerifyPage } from '../user-verify/user-verify'

import { LoginPage } from '../login/login';
// declare var cordova: any;

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-register',
   templateUrl: 'register.html',
 })
 export class RegisterPage {



   formgroup:FormGroup;

   name:AbstractControl;
   mobile_no: AbstractControl;
   age:AbstractControl;
   country:AbstractControl;
   email:AbstractControl;
   password:AbstractControl;


   countries ;

   rootPage: any;
   constructor(public authService:AuthServiceProvider, 
     public navCtrl: NavController, 
     public navParams: NavParams,
     public formBuilder:FormBuilder,
     // private camera: Camera, 
     // private transfer: Transfer, 
     // private file: File, 
     // private filePath: FilePath, 
     public actionSheetCtrl: ActionSheetController, 
     public toastCtrl: ToastController, 
     public platform: Platform, 
     public loadingCtrl: LoadingController,
     private fire:AngularFireAuth,
     public alertCtrl: AlertController,
     private nav:Nav
     ) {
     this.formgroup = formBuilder.group({
       name:['',Validators.required],
       mobile_no:['',Validators.required],
       age:['',Validators.required],
       country:['',Validators.required],
       email:['',Validators.compose([Validators.required, Validators.email])],
       password:['',Validators.required],

     });

     this.mobile_no = this.formgroup.controls['mobile_no'];
     this.name = this.formgroup.controls['name'];
     this.age = this.formgroup.controls['age'];
     this.country = this.formgroup.controls['country'];
     this.email = this.formgroup.controls['email'];
     this.password = this.formgroup.controls['password'];


     this.countryList();


   }



   countryList(){
     this.authService.getCountries().then((result)=>{
       this.countries = result;
     })
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad RegisterPage');
   }


   registerUser(){
     this.fire.auth.createUserWithEmailAndPassword("email","pass");
   }

   register(value: any){
     if(this.formgroup){

       console.log("submited",value);
       var userEmail = value.email;

       this.authService.registerSubmit(value).then((result)=>{
         let alert = 

         this.alertCtrl.create({
           title: ' ',
           message: result['msg'],
           buttons: [
           {
             text: 'OK',
             handler: () => {
               console.log('OK CLIKED');
               this.nav.setRoot(UserVerifyPage,{userEmail:userEmail});
               this.rootPage = UserVerifyPage;
             }
           }
           ]
         });
         alert.present();



       },(err)=>{
         console.log(err)
         let alert = this.alertCtrl.create({
           title: 'Error',
           subTitle: err.body,
           buttons: ['OK']
         });
         alert.present();
       })
     }

   }

   onSignin() {
     this.navCtrl.push(LoginPage);
   }

 }
