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
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Nav } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { UserVerifyPage } from '../user-verify/user-verify';
import { LoginPage } from '../login/login';
// declare var cordova: any;
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, navCtrl, navParams, formBuilder, 
        // private camera: Camera, 
        // private transfer: Transfer, 
        // private file: File, 
        // private filePath: FilePath, 
        actionSheetCtrl, toastCtrl, platform, loadingCtrl, fire, alertCtrl, nav) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.fire = fire;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.formgroup = formBuilder.group({
            name: ['', Validators.required],
            mobile_no: ['', Validators.required],
            age: ['', Validators.required],
            country: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
        });
        this.mobile_no = this.formgroup.controls['mobile_no'];
        this.name = this.formgroup.controls['name'];
        this.age = this.formgroup.controls['age'];
        this.country = this.formgroup.controls['country'];
        this.email = this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password'];
        this.countryList();
    }
    RegisterPage.prototype.countryList = function () {
        var _this = this;
        this.authService.getCountries().then(function (result) {
            _this.countries = result;
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUser = function () {
        this.fire.auth.createUserWithEmailAndPassword("email", "pass");
    };
    RegisterPage.prototype.register = function (value) {
        var _this = this;
        if (this.formgroup) {
            console.log("submited", value);
            var userEmail = value.email;
            this.authService.registerSubmit(value).then(function (result) {
                var alert = _this.alertCtrl.create({
                    title: ' ',
                    message: result.msg,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                console.log('OK CLIKED');
                                _this.nav.setRoot(UserVerifyPage, { userEmail: userEmail });
                                _this.rootPage = UserVerifyPage;
                            }
                        }
                    ]
                });
                alert.present();
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.body,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    RegisterPage.prototype.onSignin = function () {
        this.navCtrl.push(LoginPage);
    };
    RegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [AuthServiceProvider,
            NavController,
            NavParams,
            FormBuilder,
            ActionSheetController,
            ToastController,
            Platform,
            LoadingController,
            AngularFireAuth,
            AlertController,
            Nav])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map