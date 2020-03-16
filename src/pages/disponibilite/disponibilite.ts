import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ServerProvider } from '../../providers/server/server';
import { DisponibiliteProvider } from '../../providers/disponibilite/disponibilite';

@IonicPage()
@Component({
  selector: 'page-disponibilite',
  templateUrl: 'disponibilite.html',
})
export class DisponibilitePage {

  dispo:any;
  places = { Nom_p: '', Prix_p: '', Etat_dispo: '', Id_park: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public CardsService: ServerProvider,
    public userService:ServerProvider, public disponibiliteProvider: DisponibiliteProvider) {
      //this.initializeItems();
      this.getdisponibilite();
  } 
  getdisponibilite() {
      this.disponibiliteProvider.getdisponibilite(this.userService['Id_park'])
          .then(data => {
            this.dispo=data;
            console.log(this.dispo);
          });
  }

  ionViewDidLoad() {
    this.CardsService.getLocalData(); 
  }
  quitter(){
    this.navCtrl.popTo(LoginPage);
  }

 /* getItems(ev) {
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
  }*/

}
