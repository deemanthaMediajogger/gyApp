import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserVerifyPage } from './user-verify';

@NgModule({
  declarations: [
    UserVerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(UserVerifyPage),
  ],
})
export class UserVerifyPageModule {}
