import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';
import { SwingModule } from 'angular2-swing';
import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
// import { MapPage } from '../pages/map/map';
// import { SchedulePage } from '../pages/schedule/schedule';
// import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
// import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { WallPage } from '../pages/wall/wall';
import { GiveawaysPage } from '../pages/giveaways/giveaways';

import {UserVerifyPage} from '../pages/user-verify/user-verify'

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GiveawayServiceProvider } from '../providers/giveaway-service/giveaway-service';

import { InfoModalPage } from '../pages/info-modal/info-modal';
// import { InfoModalPageModule } from '../pages/info-modal/info-modal.module';

const FirebaseAuth ={
  apiKey: "AIzaSyAcqlow_lW6TcHNNnOCLt_GSJYub16vvRs",
  authDomain: "giveawayapp-198a4.firebaseapp.com",
  databaseURL: "https://giveawayapp-198a4.firebaseio.com",
  projectId: "giveawayapp-198a4",
  storageBucket: "giveawayapp-198a4.appspot.com",
  messagingSenderId: "237814025687"

};

@NgModule({
  declarations: [
  ConferenceApp,
  AboutPage,
  AccountPage,
  LoginPage,
  // MapPage,
  PopoverPage,
  // SchedulePage,
  // ScheduleFilterPage,
  SessionDetailPage,
  SignupPage,
  SpeakerDetailPage,
  // SpeakerListPage,
  TabsPage,
  TutorialPage,
  SupportPage,
  WallPage,
  GiveawaysPage,
  RegisterPage,
  UserVerifyPage,
  InfoModalPage
  
  ],
  imports: [
  BrowserModule,
  AngularFireModule.initializeApp(FirebaseAuth),
  AngularFireAuthModule,
  HttpModule,SwingModule,
  // InfoModalPageModule,
  IonicModule.forRoot(ConferenceApp, {
    tabsPlacement: 'bottom',
    // platforms: {
      //   android: {
        //     tabsPlacement: 'top'
        //   },
        //   ios: {
          //     tabsPlacement: 'top'
          //   },
          //   windows:
          //   {
            //     tabsPlacement: 'top'
            //   }
            // }
          }, {
            links: [
            { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
            // { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
            { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
            // { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
            // { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
            { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
            // { component: MapPage, name: 'Map', segment: 'map' },
            { component: AboutPage, name: 'About', segment: 'about' },
            { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
            { component: SupportPage, name: 'SupportPage', segment: 'support' },
            { component: LoginPage, name: 'LoginPage', segment: 'login' },
            { component: AccountPage, name: 'AccountPage', segment: 'account' },
            { component: SignupPage, name: 'SignupPage', segment: 'signup' }
            ]
          }),
  IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  ConferenceApp,
  AboutPage,
  AccountPage,
  LoginPage,
  // MapPage,
  PopoverPage,
  // SchedulePage,
  // ScheduleFilterPage,
  SessionDetailPage,
  SignupPage,
  SpeakerDetailPage,
  // SpeakerListPage,
  TabsPage,
  TutorialPage,
  SupportPage,
  WallPage,
  GiveawaysPage,
  RegisterPage,
  UserVerifyPage,
  InfoModalPage
  
  ],
  providers: [
  { provide: ErrorHandler, useClass: IonicErrorHandler },
  ConferenceData,
  AuthServiceProvider,
  UserData,
  InAppBrowser,
  SplashScreen,
  GiveawayServiceProvider
  ]
})
export class AppModule { }
