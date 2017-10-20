var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController } from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { SessionDetailPage } from '../session-detail/session-detail';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
var SchedulePage = /** @class */ (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(SessionDetailPage, { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'Sessions have been updated.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        ViewChild('scheduleList', { read: List }),
        __metadata("design:type", List)
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Component({
            selector: 'page-schedule',
            templateUrl: 'schedule.html'
        }),
        __metadata("design:paramtypes", [AlertController,
            App,
            LoadingController,
            ModalController,
            NavController,
            ToastController,
            ConferenceData,
            UserData])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
//# sourceMappingURL=schedule.js.map