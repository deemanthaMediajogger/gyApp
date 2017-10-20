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
import { IonicPage, NavController, NavParams, LoadingController, Nav } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
/**
 * Generated class for the UserVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserVerifyPage = /** @class */ (function () {
    function UserVerifyPage(navCtrl, navParams, loadingCtrl, alertCtrl, formBuilder, authService, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.nav = nav;
        console.log("email parem", navParams.get('userEmail'));
        this.formgroup = formBuilder.group({
            email: ['', Validators.required],
            verification_code: ['', Validators.required],
        });
        // this.email_add="email@emial.ca";
        this.email_add = navParams.get('userEmail');
        this.email = this.formgroup.controls['email'];
        this.verification_code = this.formgroup.controls['verification_code'];
    }
    UserVerifyPage.prototype.verifyUser = function (value) {
        var _this = this;
        if (this.formgroup) {
            console.log("submited", value);
            this.authService.verifyUser(value).then(function (result) {
                var alert;
                if (result.auth) {
                    alert = _this.alertCtrl.create({
                        title: 'Success',
                        message: result.msg,
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    _this.nav.setRoot(LoginPage);
                                }
                            }
                        ]
                    });
                }
                else {
                    alert = _this.alertCtrl.create({
                        title: 'Verification Faild',
                        message: result.msg,
                        buttons: ['OK']
                    });
                }
                alert.present();
            }, function (err) {
                console.log(err);
            });
        }
    };
    UserVerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserVerifyPage');
    };
    UserVerifyPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-verify',
            templateUrl: 'user-verify.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            AlertController,
            FormBuilder,
            AuthServiceProvider,
            Nav])
    ], UserVerifyPage);
    return UserVerifyPage;
}());
export { UserVerifyPage };
//# sourceMappingURL=user-verify.js.map