import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  // let apiUrl = "http://localhost/giveaway_mobile_api/";
let apiUrl="http://giveawaymobileapi.000webhostapp.com/";
  export const baseUrl = apiUrl;
  
  @Injectable()
  export class AuthServiceProvider {


    constructor(public http: Http) {
      console.log('Hello AuthServiceProvider Provider');
    }

    signUp(data){

      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        // headers.append('Content-Type','application/json');

        headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');


        this.http.post(apiUrl+'index.php/welcome/register',data,{headers:headers})
        .subscribe(res=>{
          resolve(res.json());

        },(err)=>{
          reject(err);
        });
      })
    }

    getCountries(){
      return new Promise((resolve,reject)=>{
        this.http.get(apiUrl+'index.php/welcome/getCountries')
        .subscribe(res=>{
          resolve(res.json());
        },(err)=>{
          reject(err);
        });
      })
    }


    registerSubmit(data){

      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        // headers.append('Content-Type','application/json');

        headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');


        this.http.post(apiUrl+'index.php/welcome/register',data,{headers:headers})
        .subscribe(res=>{

          resolve(res.json());


        },(err)=>{
          reject(err);
        });
      })
    }

    loginSubmit(data){

      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
        this.http.post(apiUrl+'index.php/welcome/login_verification',data,{headers:headers})
        .subscribe(res=>{
          resolve(res.json());
        },(err)=>{
          reject(err);
        });
      })
    }

    verifyUser(data){
      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
        this.http.post(apiUrl+'index.php/welcome/verifyUser',data,{headers:headers})
        .subscribe(res=>{

          resolve(res.json());


        },(err)=>{
          reject(err);
        });
      })
    }

    getUserData(data){
      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
        this.http.post(apiUrl+'index.php/welcome/getUserData',data,{headers:headers})
        .subscribe(res=>{
          resolve(res.json());
        },(err)=>{
          reject(err);
        });
      })
    }


    socialRegister(data){

      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        // headers.append('Content-Type','application/json');

        headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');


        this.http.post(apiUrl+'index.php/welcome/registerSocial',data,{headers:headers})
        .subscribe(res=>{

          resolve(res.json());


        },(err)=>{
          reject(err);
        });
      })
    }

  }
