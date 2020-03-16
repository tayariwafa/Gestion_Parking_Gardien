import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SortiePage } from '../sortie/sortie';
import { EspaicesProvider } from '../../providers/espaices/espaices';

@IonicPage()
@Component({
  selector: 'page-espaices',
  templateUrl: 'espaices.html',
})
export class EspaicesPage {
  montant: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public espaicesProvider: EspaicesProvider) {
   this.getMontant();
   
  }
  getMontant() {
    this.espaicesProvider.getMontant()
    .then(data => {
      this.montant = data;
      console.log(this.montant);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaicesPage');
  }
  /*/****navigation  */
  retour(){
    this.navCtrl.setRoot(SortiePage);
  }
  /****bech tsave l montant autrementdit  ta3mel update 3al tabele reservation */
  saveMontant(){
    this.saveMontant();
  }

}
