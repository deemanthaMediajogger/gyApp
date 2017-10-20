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
import { AlertController } from 'ionic-angular';
// import { TabsPage } from '../tabs-page/tabs-page';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
var SignupPage = /** @class */ (function () {
    function SignupPage(alertCtrl, navCtrl, userData, auth) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.auth = auth;
        this.signup = { name: '', age: '', mobile_no: '', email: '', country: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.signup);
            this.auth.signUp(this.signup)
                .then(function (result) {
                console.log("regdata", result.auth);
                if (result.auth) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Success',
                        subTitle: result.msg,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                }
            }, function (err) {
                console.log(err);
            });
            // this.userData.signup(this.signup);
            // this.navCtrl.push(TabsPage);
        }
    };
    SignupPage.prototype.onSignin = function () {
        this.navCtrl.push(LoginPage);
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-user',
            templateUrl: 'signup.html'
        }),
        __metadata("design:paramtypes", [AlertController, NavController, UserData, AuthServiceProvider])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map