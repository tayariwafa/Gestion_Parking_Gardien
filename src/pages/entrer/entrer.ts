import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EspaicesPage } from '../espaices/espaices';
import { LoginPage } from '../login/login';
import { ServerProvider } from '../../providers/server/server';
import { ReserverpassagerPage } from '../reserverpassager/reserverpassager';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do';
import { EntrerProvider } from '../../providers/entrer/entrer';

import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';

@IonicPage()
@Component({
  selector: 'page-entrer',
  templateUrl: 'entrer.html',
})
@Injectable()
export class EntrerPage {


  matricule: any;
  id: string[];
  parkings={id:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public CardsService: ServerProvider,
    public http: HttpClient, public entrerProvider: EntrerProvider,public userService : MyParcUserProvider) {

      this.initializeItems();
      this.lIRELISTEMATRICULE();
      //this.id = userService.parkings["id"];

  }
   /* initializeItems() {
        this.items = [
            '190036',
            '19201206',
            '012525',
            '123TN258963',
            '123001',
            '6598735',

        ];
    }*/
    initializeItems() {
        this.matricule= this.entrerProvider["Matricule"];

    }


  lIRELISTEMATRICULE(){

    this.entrerProvider.lIRELISTEMATRICULE(this.userService.gardien['Id_park'])
        .then(data => {
      this.matricule=data;
      console.log(this.matricule);
    });
  }

  Valider(){
    this.navCtrl.push(EspaicesPage);
  }
  quitter1(){
    this.navCtrl.popTo(LoginPage);
  }
  ReserverPassager(){
    this.navCtrl.push(ReserverpassagerPage);
  }
  ionViewDidLoad() {
    this.CardsService.getLocalData();
    }

 getItems(ev) {
    // Reset items back to all of the items
    //this.initializeItems();
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
        this.matricule= this.matricule.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
