import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;
  email:string;
  user_id:string;
  full_name:string;
  contact:string;
  country:string;
  age:string;

  constructor(public alertCtrl: AlertController,
    public nav: NavController, public userData: UserData,
    private authService:AuthServiceProvider
    ) {

  }

  ngAfterViewInit() {
    this.getUsername();

  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
      'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((user_id) => {
      // this.username = username;
      this.user_id = user_id;
      console.log("acc", user_id);
      this.getUserDetails(this.user_id);
      
    });
  }

  getUserDetails(user_id:string){
    console.log("get data from", user_id);

    this.authService.getUserData(user_id).then((result)=>{
      console.log("got user result",result);

      this.full_name = result[0].user_name;
      this.email = result[0].user_email;
      this.contact = result[0].user_mobile_no;
      this.country = result[0].user_country;
      this.age = result[0].user_age;

      console.log("full name",result[0].user_name);

    })



  }
  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }
}
