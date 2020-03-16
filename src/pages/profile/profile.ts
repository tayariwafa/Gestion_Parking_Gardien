import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ProfileProvider } from '../../providers/profile/profile';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})
export class ProfilePage implements OnInit {

    ngOnInit(): void {
        this.getProfile();
    }
    gardien = { nom: '', prenom: '', email: '', numtel: '', cin: '', temps:'',nbheure:'',salaire:''};
    isActivated: boolean;
    Activated: boolean;
    id:number;
constructor( public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider,public  userService : MyParcUserProvider
    ,public toastCtrl: ToastController){
      this.getProfile();
}
getProfile() {
  this.profileProvider.getProfile(this.userService.gardien['id'])
  .then(data => {
      this.gardien.email = data["msg"]["email_g"];
      this.gardien.prenom = data["msg"]["Prenom_g"];
      this.gardien.nom = data["msg"]["Nom_g"];
      this.gardien.cin = data["msg"]["cin_g"];
      this.gardien.numtel = data["msg"]["tel_g"];
      this.gardien.salaire = data["msg"]["salaire_g"];
      this.gardien.nbheure = data["msg"]["NbHeure_g"];
      this.gardien.temps = data["msg"]["TempsHoraire_g"];

  });
}
updateProfile() {
   if (this.gardien.email==null||this.gardien.prenom==null||this.gardien.nom==null||this.gardien.cin==null||this.gardien.numtel==null){
        this.showToastWithCloseButton1();
    }else{
  this.profileProvider.updateProfile(this.userService.gardien['id'],this.gardien.email,this.gardien.prenom,this.gardien.nom,this.gardien.cin,this.gardien.numtel).then((result) => {
    console.log(result);  //,this.gardien.password2
  }, (err) => {
    console.log(err);
  });

  }
  }

/*updateProfile() {
  if ((this.gardien.password1!=this.gardien.password2)||this.gardien.password3==this.gardien.password2) {
    alert('verifier votre cordonner')
  } else {
    this.api2018.updateProfile(this.gardien).then((result) => {
      console.log(result);
      //yomken lena tsir navigation ba3d l update
    }, (err) => {
      console.log(err);
    });
  }

}*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  annule(){
    this.showToastWithCloseButton();
    this.navCtrl.setRoot(MenuPage);
  }
    presentToast() {
        const toast = this.toastCtrl.create({
            message: 'Les autres champs son non modifiable',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
  modif(){

     this.isActivated=!this.isActivated
          this.Activated=this.Activated
      this.presentToast();
                }

  update(){
    this.navCtrl.setRoot(ProfilePage);
  }
    showToastWithCloseButton() { //position: string
        const toast = this.toastCtrl.create({
            message: 'voulez vous vraiment annuler cette modification!',
            showCloseButton: true,
            closeButtonText: 'Oui',
            position: 'top'
        });
        toast.present();
    }
    showToastWithCloseButton1() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Tous les champs sont obligatoire !!',
            showCloseButton: true,
            closeButtonText: 'ok',
            position: 'top'
        });
        toast.present();
    }
    showToastWithCloseButton2() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Le deux mot de passe doit etre identitique !!',
            showCloseButton: true,
            closeButtonText: 'ok',
            position: 'top'
        });
        toast.present();
    }
}
