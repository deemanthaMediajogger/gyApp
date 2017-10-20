import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the InfoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-info-modal',
 	templateUrl: 'info-modal.html',
 })
 export class InfoModalPage {

 	data_giveaway:any;
 	data_media:any;
 	data_link:any;
 	company:any;



 	constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

 		this.data_giveaway = this.navParams.data.data_giveaway[0];
		this.company = this.navParams.data.company[0];
		console.log(this.navParams.data)
 		if(this.navParams.data.data_link.length <= 0 ){
			this.data_link = [];
			console.log("got empty",this.data_link.length)
 		}else{
 			this.data_link = this.navParams.data.data_link;
 		}

 		console.log("rendered array",this.data_link);

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad InfoModalPage');
 		// console.log("nav params are ",this.navParams.get('data'));

 		// this.data_giveaway = this.navParams.get('data').data_giveaway[0];
 		// this.myF = "sss";
 	}

 	closeModal() {
 		this.viewCtrl.dismiss();
 	}

 	openUrl(url: string) {
 		window.open(url, '_blank');
 		this.viewCtrl.dismiss();
 	}

 }
