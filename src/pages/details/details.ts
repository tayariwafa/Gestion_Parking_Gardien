import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sortie2Page } from '../sortie2/sortie2';
import { DetailsProvider } from '../../providers/details/details';
import {SortieProvider} from "../../providers/sortie/sortie";

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
    public firstParam;
    voitures1 = { Matricule: '', Marque: '', couleur: '', Surplus: '', MontantInitial: ''};
    public Matricule ;
  constructor(public navCtrl: NavController, public detailsProvider: DetailsProvider, public sortieMatricule : SortieProvider, public navParams: NavParams) {
       this.CalculerMontant();
      this.Matricule = navParams.get("firstPassed");
  }

    CalculerMontant() {
          this.detailsProvider.CalculerMontantP(this.Matricule)
              .subscribe(data => {
                  this.voitures1.Matricule = data["msg"]["Matricule"];
                  this.voitures1.Marque = data["msg"]["Marque"];
                  this.voitures1.couleur = data["msg"]["couleur"];
              });
      }

/*
    Updatereservation() {
      this.api2018.Updatereservation(this.user).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }
    */
  ionViewDidLoad() {
     // this.getVoiture();
    console.log('ionViewDidLoad DetailsPage');
  }
  payer1(){
    this.CalculerMontant();
  }
}

