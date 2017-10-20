import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { NavParams,ActionSheetController, ToastController,AlertController, Platform, LoadingController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { RegisterPage } from '../register/register';

import { UserVerifyPage } from '../user-verify/user-verify';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  rootPage:any;
  // login={ email: '', password: '' };
  submitted = false;


  formgroup:FormGroup;

  email:AbstractControl;
  password:AbstractControl;



  constructor(public navCtrl: NavController, public userData: UserData,
    public authService:AuthServiceProvider, 
    public navParams: NavParams,
    public formBuilder:FormBuilder,

    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, 
    public platform: Platform, 
    public loadingCtrl: LoadingController,
    // private fire:AngularFireAuth,
    public alertCtrl: AlertController,
    // private nav:Nav
    private fire:AngularFireAuth,
    ) { 


    this.formgroup = formBuilder.group({

      email:['',Validators.required],
      password:['',Validators.required],

    });

    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];

  }


  loginData(value: any){
    if(this.formgroup){

      console.log("submited",value);
      

      this.authService.loginSubmit(value).then((result)=>{
        let alert;

        if(result['auth']){
          this.userData.login(result['user_code']);

          this.navCtrl.push(TabsPage);
          // alert = 

          // this.alertCtrl.create({
            //   title: ' ',
            //   message: result.msg,
            //   buttons: [
            //   {
              //     text: 'OK',
              //     handler: () => {
                //       console.log('OK CLIKED');
                //       // this.nav.setRoot(TabsPage);
                //       // this.rootPage = TabsPage;
                //     }
                //   }
                //   ]
                // });
              }else{
                alert = 

                this.alertCtrl.create({
                  title: ' Error',
                  message: result['msg'],
                  buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      console.log('OK CLIKED');
                      // this.nav.setRoot(TabsPage);
                      // this.rootPage = TabsPage;
                    }
                  }
                  ]
                });
                alert.present();
              }


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


  // onLogin(form: NgForm) {
    //   this.submitted = true;

    //   if (form.valid) {
      //     this.userData.login(this.login.email);
      //     this.navCtrl.push(TabsPage);
      //   }
      // }

      onSignup() {
        this.navCtrl.push(SignupPage);
      }

      onSignup2() {
        this.navCtrl.push(RegisterPage);
      }

      verifyPage(){
        this.navCtrl.push(UserVerifyPage);
      }


      loginWithFacebook(){
        this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res)=>{
          console.log("eresult fb",res);
          console.log("aditional info", res.additionalUserInfo.profile);
          console.log(res.user);
          console.log(res.user.displayName,res.user.email,res.user.phoneNumber,res.user.photoURL);

          // let socialDetails = {fullname:res.user.displayName,email:res.user.email,contact_no:res.user.phoneNumber,photoUrl:res.user.photoURL};
          let userData = res.additionalUserInfo.profile;

          this.authService.socialRegister(userData).then((result)=>{
            let alert;

            if(result['auth']){
          this.userData.login(result['user_code']);

          this.navCtrl.push(TabsPage);

            }else{
              alert = this.alertCtrl.create({
                title: ' Error',
                message: result['msg'],
                buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    console.log('OK CLIKED');
                    // this.nav.setRoot(TabsPage);
                    // this.rootPage = TabsPage;
                  }
                }
                ]
              });
              alert.present();
            }



          },(err)=>{
            console.log(err)
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: err.body,
              buttons: ['OK']
            });
            alert.present();
          })

        });

      }

      logoutOfFacebook(){
        this.fire.auth.signOut();
        console.log("sign out from facebook");
      }

    }
