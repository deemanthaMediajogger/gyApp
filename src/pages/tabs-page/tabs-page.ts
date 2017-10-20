import { Component } from '@angular/core';

import { NavParams,NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';

import { WallPage } from '../wall/wall';
import { GiveawaysPage } from '../giveaways/giveaways';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  tab5Root: any = WallPage;
  tab6Root: any = GiveawaysPage;
  
  mySelectedIndex: number;

  constructor(public navParams: NavParams,public navCtrl:NavController) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

//   swipeEvent(e) {
// console.log(this.navParams.data.tabIndex);
//  console.log("E is", e)   
//   // if(e.direction == '2'){
//   //    this.navCtrl.parent.select(2);
//   // }
//   // else if(e.direction == '4'){
//   //    this.navCtrl.parent.select(0);
//   // }
// }

}
