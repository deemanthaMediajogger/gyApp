import { Component,ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx'; 
import {
  StackConfig,
  // Stack,
  // Card,
  // ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

  import { baseUrl } from '../../providers/auth-service/auth-service';
  import { InfoModalPage } from '../info-modal/info-modal';
  // import {GiveawayServiceProvider } from '../../providers/giveaway-service/giveaway-service';
/**
 * Generated class for the GiveawaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-giveaways',
   templateUrl: 'giveaways.html',
 })

 

 export class GiveawaysPage {

   private listofGiveaways;

   @ViewChild('myswing1') swingStack: SwingStackComponent;
   @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

   cards: Array<any>;
   giveawayCards:Array<any>;
   stackConfig: StackConfig;
   recentCard: string = '';
   index:number = 0;
   emptyMsg:string;
   // let baseurl= baseUrl;


   constructor(public navCtrl: NavController, public navParams: NavParams,
     private http: Http,public modalCtrl:ModalController,
     // private giveawayService: GiveawayServiceProvider
     ){
     // console.log("base base",baseUrl);
     this.stackConfig = {
       throwOutConfidence: (offsetX, offsetY, element) => {
         Math.abs(offsetY);
         return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
       },
       transform: (element, x, y, r) => {
         this.onItemMove(element, x, y, r);
       },
       throwOutDistance: (d) => {
         Math.abs(d);
         return 800;
       }
     };

   }


   ngAfterViewInit() {
     this.giveawayCards = [];
     this.getAllGiveaways();

     // Either subscribe in controller or set in HTML
     this.swingStack.throwin.subscribe((event: DragEvent) => {
       event.target.style.background = '#ffffff';
     });

     this.cards = [];

     // this.addNewCards(1);

   }
   

   // Called whenever we drag an element
   onItemMove(element, x, y, r) {
     var color = '';
     var abs = Math.abs(x);
     let min = Math.trunc(Math.min(16*16 - abs, 16*16));
     let hexCode = this.decimalToHex(min, 2);

     if (x < 0) {
       color = '#FF' + hexCode + hexCode;
     } else {
       color = '#' + hexCode + 'FF' + hexCode;
     }

     element.style.background = color;
     element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
   }

   // Connected through HTML
   voteUp(like: boolean) {
     let removedCard = this.cards.pop();
     console.log("removedcard" ,removedCard);
     this.index = this.index + 1;
     if(this.index <= this.giveawayCards.length - 1){
       this.addNewCards(this.giveawayCards[this.index]);
       console.log("index value",this.index)
       if (like) {
         this.recentCard = 'You liked: ' + removedCard.giveaway_code;
       } else {
         this.recentCard = 'You disliked: ' + removedCard.giveaway_code;
       }
     }else{
       this.emptyMsg = "There are no more active giveaways. Click here to refresh.";
     }

     
   }


   getInfo(giveaway:string) {
   
     this.http.get(baseUrl+ 'index.php/welcome/getThisGiveaway/'+giveaway)
     .map(data => data.json())
     .subscribe(result => {

      // this.openModal(result);
      let myModal = this.modalCtrl.create(InfoModalPage,result);
    myModal.present();
     })


   }


  // openModal(data:any) {

    
  // }



   getAllGiveaways(){



     this.http.get(baseUrl+ 'index.php/welcome/allGiveaways/')
     .map(data => data.json())
     .subscribe(result => {
       this.listofGiveaways =result;
       for (let val of result) {

         this.giveawayCards.push(val);
       }

       this.addNewCards(this.giveawayCards[this.index]);
     })


   }

   getMyData(){

     console.log("get my data", this.listofGiveaways);
   }

   // Add new cards to our array
   addNewCards(val: any) {


     this.cards.push(val);

     // this.http.get('https://randomuser.me/api/?results=' + count)
     // .map(data => data.json().results)
     // .subscribe(result => {
       //   for (let val of result) {
         //     this.cards.push(val);
         //   }
         // })

         // this.http.get(baseUrl+ 'index.php/welcome/giveawayList/' + count)
         // .map(data => data.json())
         // .subscribe(result => {
           //   console.log(result);
           //   for (let val of result) {
             //     console.log("data goes as",val);
             //     this.cards.push(val);
             //   }
             // })

             // this.cards.push(giveawayCards)


           }

           // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
           decimalToHex(d, padding) {
             var hex = Number(d).toString(16);
             padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

             while (hex.length < padding) {
               hex = "0" + hex;
             }

             return hex;
           }

         }
