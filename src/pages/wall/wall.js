var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WallPage = /** @class */ (function () {
    function WallPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    WallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WallPage');
    };
    WallPage.prototype.doRefresh = function (refresher) {
        // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
        //   this.shownSessions = data.shownSessions;
        //   this.groups = data.groups;
        var _this = this;
        // simulate a network request that would take longer
        // than just pulling from out local json file
        //refresh method goes here go to backend and get news feeds
        setTimeout(function () {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'news feeds have been updated.',
                duration: 3000
            });
            toast.present();
        }, 1000);
        // });
    };
    WallPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-wall',
            templateUrl: 'wall.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ToastController])
    ], WallPage);
    return WallPage;
}());
export { WallPage };
//# sourceMappingURL=wall.js.map