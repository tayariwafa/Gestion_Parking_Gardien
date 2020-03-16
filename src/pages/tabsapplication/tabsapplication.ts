import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EntrerPage } from '../entrer/entrer';
import { SortiePage } from '../sortie/sortie';

@IonicPage()
@Component({
  selector: 'page-tabsapplication',
  templateUrl: 'tabsapplication.html'
})
export class TabsapplicationPage {


  entrerRoot = EntrerPage;
  sortieRoot = SortiePage;
  


  constructor(public navCtrl: NavController) {}
  ionViewDidLoad(){
    console.log('ionViewDidLoad TabsapplicationPage');
  }

}
