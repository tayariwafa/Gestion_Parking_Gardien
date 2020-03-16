import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { EntrerPage } from '../entrer/entrer';
import {LoginPage} from "../login/login";
import {RecupererServiceSaisieProvider} from "../../providers/recuperer-service-saisie/recuperer-service-saisie";
import {RecupererProvider} from "../../providers/recuperer/recuperer";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do';

@IonicPage()
@Component({
  selector: 'page-saisie',
  templateUrl: 'saisie.html',
})
export class SaisiePage {
  gardien = { mdp_g: '', mdp2: ''};
  cin_g:string;
  id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ProviderRecupererService:RecupererServiceSaisieProvider, public aletCtrl: AlertController
      ,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public RecupererProvider:RecupererProvider) {
      //this.id = this.RecupererProvider.gardien;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaisiePage');
  }
  Confirmer(){
      if (this.gardien.mdp_g==this.gardien.mdp2) {
         this.id=this.RecupererProvider.gardien['id'];
      this.ProviderRecupererService.Confirmer(this.id,this.gardien.mdp_g)
          .subscribe(succes => { //this.presentLoading();
              if (succes)
              {
                  this.navCtrl.setRoot(LoginPage);

              }
          }, (err) => {
              this.showToastWithCloseButton();
              console.log(err);
          });
      }else {
          this.showToastWithCloseButton();
      }
  }
    showToastWithCloseButton() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Pour changer votre Mots de passe le deux schamps doit etre compatible et non vide...!',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }

}
