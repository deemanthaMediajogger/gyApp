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
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
// import { UserOptions } from '../../interfaces/user-options';
import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { RegisterPage } from '../register/register';
import { UserVerifyPage } from '../user-verify/user-verify';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = { email: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.email);
            this.navCtrl.push(TabsPage);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.onSignup2 = function () {
        this.navCtrl.push(RegisterPage);
    };
    LoginPage.prototype.verifyPage = function () {
        this.navCtrl.push(UserVerifyPage);
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-user',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController, UserData])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map