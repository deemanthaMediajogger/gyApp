import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiveawaysPage } from './giveaways';

@NgModule({
  declarations: [
    GiveawaysPage,
  ],
  imports: [
    IonicPageModule.forChild(GiveawaysPage),
  ],
})
export class GiveawaysPageModule {}
