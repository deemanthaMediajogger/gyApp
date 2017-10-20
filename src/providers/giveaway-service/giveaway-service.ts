import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { baseUrl } from '../auth-service/auth-service';
/*
  Generated class for the GiveawayServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class GiveawayServiceProvider {

  	constructor(public http: Http) {
  		console.log('Hello GiveawayServiceProvider Provider');
  	}

  	getGiveaways(){
  		return new Promise((resolve,reject)=>{
  			this.http.get(baseUrl+'index.php/welcome/allGiveaways')
  			.subscribe(res=>{
  				resolve(res.json());
  			},(err)=>{
  				reject(err);
  			});
  		})
  	}


  }
