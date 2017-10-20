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
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { WallPage } from '../wall/wall';
import { GiveawaysPage } from '../giveaways/giveaways';
var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = SchedulePage;
        this.tab2Root = SpeakerListPage;
        this.tab3Root = MapPage;
        this.tab4Root = AboutPage;
        this.tab5Root = WallPage;
        this.tab6Root = GiveawaysPage;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Component({
            templateUrl: 'tabs-page.html'
        }),
        __metadata("design:paramtypes", [NavParams])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs-page.js.map