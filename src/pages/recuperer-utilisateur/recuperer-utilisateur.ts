import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams,ToastController,LoadingController} from 'ionic-angular';
import { RecupererProvider } from '../../providers/recuperer/recuperer';
import { SaisiePage } from '../saisie/saisie';
import { RecupererMV } from '../../ViewModels/RecupererMV';


@IonicPage()
@Component({
  selector: 'page-recuperer-utilisateur',
  templateUrl: 'recuperer-utilisateur.html',
})
export class RecupererUtilisateurPage {
  //gardien: RecupererMV = new RecupererMV();
  gardien = { cin_g: '', tel_g: ''};
 $succ:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ProviderRecuperer:RecupererProvider, public aletCtrl: AlertController
    ,public toastCtrl: ToastController,public loadingCtrl: LoadingController) {

      //this.recupererGardien()
  }
 
    recupererGardien() {

    this.ProviderRecuperer.recupererGardien(this.gardien.cin_g,this.gardien.tel_g)
        .subscribe(succes => { //this.presentLoading();
      if (succes)
      {
        this.navCtrl.push(SaisiePage);

      }
    }, (err) => {
        this.showToastWithCloseButton();
        console.log(err);
    });
    }

    showToastWithCloseButton() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Pour modifier votre Mots de passe le deux champs son obligatoire vérifier que vos donner son correcte et qui il n y pas des champs vide!',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "S'il vous plaît, attendez...",
            duration: 3000
        });
        loader.present();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad RecupererUtilisateurPage');
    }
    Recuperer2(){
        this.navCtrl.push(SaisiePage);
    }



}