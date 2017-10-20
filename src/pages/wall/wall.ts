import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Refresher,ToastController } from 'ionic-angular';

/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WallPage');
  }

  doRefresh(refresher: Refresher) {
    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;

      // simulate a network request that would take longer
      // than just pulling from out local json file

      //refresh method goes here go to backend and get news feeds
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'news feeds have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
    // });
  }



}
