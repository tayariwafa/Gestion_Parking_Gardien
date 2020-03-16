import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ServerProvider } from '../../providers/server/server';
import { ReserverpassagerPage } from '../reserverpassager/reserverpassager';
import { SortieProvider } from '../../providers/sortie/sortie';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';
import {DetailsProvider} from "../../providers/details/details";

@IonicPage()
@Component({
  selector: 'page-sortie',
  templateUrl: 'sortie.html',
})
export class SortiePage {
    details: any;
    searchQuery: string = '';
    Activated: boolean;
    items: string[];
    Matricule: any;
    public selectedItem: any;
    id: string[];
    voitures = { id: '',Matricule: '',Marque: '',couleur: '',Id_ut: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public CardsService: ServerProvider,public sortieProvider: SortieProvider
              ,public  userService : MyParcUserProvider, public detailsProvider: DetailsProvider) {
    //this.initializeItems();
    this.lIRELISTEMATRICULESORTIE();
    //this.detail();
   // this.getDetails();
  }
    initializeItems() {
        this.items = [
            '190036',
            '19201206',
            '012525',
            '123TN258963',
            '123001',
            '6598735',

        ];
    }

    lIRELISTEMATRICULESORTIE(){
        this.sortieProvider.lIRELISTEMATRICULESORTIE(this.userService.gardien['Id_park'])
            .then(data => {
                this.Matricule=data;
                console.log(data);
        });
    }
    getDetails(selectedItem) {
        this.sortieProvider.getDetails(selectedItem)
            .then(data => {
                this.voitures = data["voitures"];
                this.voitures.Matricule = data["voitures"]["Matricule"];
            console.log(data);
                this.navCtrl.push(DetailsPage, {
                    firstPassed:this.voitures.Matricule
                })
        }, (err) => {
            console.log(err);
        });
    }
  ionViewDidLoad() {
    this.CardsService.getLocalData(); 
  }
  detail(){
    this.navCtrl.push(DetailsPage);
  }
  ReserverPassager(){
    this.navCtrl.push(ReserverpassagerPage);
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}

