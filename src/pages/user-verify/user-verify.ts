import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Nav } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import  { LoginPage } from '../login/login'


/**
 * Generated class for the UserVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-user-verify',
 	templateUrl: 'user-verify.html',
 })
 export class UserVerifyPage {
 	formgroup:FormGroup;

 	email_add:string;
 	email:AbstractControl;
 	verification_code:AbstractControl;

 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams,
 		public loadingCtrl: LoadingController,
 		public alertCtrl: AlertController,
 		public formBuilder:FormBuilder,
 		private authService:AuthServiceProvider,
 		private nav:Nav,
 		) {
 		
 		console.log("email parem",navParams.get('userEmail'));

 		this.formgroup = formBuilder.group({
 			email:['',Validators.required],
 			verification_code:['',Validators.required],

 		});
 		// this.email_add="email@emial.ca";
 		this.email_add = navParams.get('userEmail');
 		this.email = this.formgroup.controls['email'];
 		this.verification_code = this.formgroup.controls['verification_code'];
 	}

 	verifyUser(value: string){
 		if(this.formgroup){
 			console.log("submited",value);
 			this.authService.verifyUser(value).then((result)=>{
 				let alert;
 				// let msg= <any>{};
 				if(result['auth']){
 					alert = this.alertCtrl.create({
 						title: 'Success',
 						message: result['msg'],
 						buttons: [
 						{
 							text: 'OK',
 							handler: () => {
 								this.nav.setRoot(LoginPage);
 								
 							}
 						}
 						]
 					});
 				}else{
 					alert = this.alertCtrl.create({
 						title: 'Verification Faild',
 						message: result['msg'],
 						buttons: ['OK']
 					});
 				}
 				alert.present();

 			},(err)=>{
 				console.log(err)
 				
 			})
 		}

 	}


 	ionViewDidLoad() {
 		console.log('ionViewDidLoad UserVerifyPage');
 	}

 }
