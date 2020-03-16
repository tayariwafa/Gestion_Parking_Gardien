import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntrerPage } from '../entrer/entrer';

/**
 * Generated class for the Sortie2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sortie2',
  templateUrl: 'sortie2.html',
})
export class Sortie2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sortie2Page');
  }
  quitter(){
    this.navCtrl.setRoot(EntrerPage);
  }
}
