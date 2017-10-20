var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { PopoverPage } from '../about-popover/about-popover';
import { SwingStackComponent } from 'angular2-swing';
var AboutPage = /** @class */ (function () {
    function AboutPage(popoverCtrl, http) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.conferenceDate = '2047-05-17';
        this.recentCard = '';
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                Math.abs(offsetY);
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                Math.abs(d);
                return 800;
            }
        };
    }
    AboutPage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        this.cards = [{ email: '' }];
        this.addNewCards(1);
    };
    // Called whenever we drag an element
    AboutPage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x < 0) {
            color = '#FF' + hexCode + hexCode;
        }
        else {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    AboutPage.prototype.voteUp = function (like) {
        var removedCard = this.cards.pop();
        this.addNewCards(1);
        if (like) {
            this.recentCard = 'You liked: ' + removedCard.email;
        }
        else {
            this.recentCard = 'You disliked: ' + removedCard.email;
        }
    };
    // Add new cards to our array
    AboutPage.prototype.addNewCards = function (count) {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=' + count)
            .map(function (data) { return data.json().results; })
            .subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var val = result_1[_i];
                _this.cards.push(val);
            }
        });
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    AboutPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    };
    __decorate([
        ViewChild('myswing1'),
        __metadata("design:type", SwingStackComponent)
    ], AboutPage.prototype, "swingStack", void 0);
    __decorate([
        ViewChildren('mycards1'),
        __metadata("design:type", QueryList)
    ], AboutPage.prototype, "swingCards", void 0);
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [PopoverController, Http])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map