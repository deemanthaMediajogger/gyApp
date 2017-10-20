import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AlertController } from 'ionic-angular';

// import { TabsPage } from '../tabs-page/tabs-page';

import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { name: '',age:'',mobile_no:'',email:'',country:'', password: '' };
  submitted = false;


  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public userData: UserData,private auth:AuthServiceProvider) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      console.log(this.signup);

      this.auth.signUp(this.signup)
      .then((result)=>{
      
    console.log("regdata",result[0].auth);

     if(result[0].auth){
        
            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: result[0].msg,
              buttons: ['OK']
            });
            alert.present();
          
     }else{

     }

    },(err)=>{
      console.log(err)
    })
      // this.userData.signup(this.signup);
      // this.navCtrl.push(TabsPage);
    }
  }

  onSignin() {
    this.navCtrl.push(LoginPage);
  }
}
