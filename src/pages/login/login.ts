import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController } from 'ionic-angular';
import { RecupererUtilisateurPage } from '../recuperer-utilisateur/recuperer-utilisateur' ;
import { MenuPage } from '../menu/menu';
import { TabsapplicationPage } from '../tabsapplication/tabsapplication';
import { HttpClient } from '@angular/common/http';

import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';
import { LoginMV } from '../../ViewModels/LoginMV';
import {EntrerPage} from "../entrer/entrer";
import {_if} from "rxjs/observable/if";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials: LoginMV = new LoginMV();
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: MyParcUserProvider, public aletCtrl: AlertController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
      let loginCall = this.userService.Login(this.credentials);
      loginCall.subscribe(success => {
          if (success)//data['success']
          {
              this.navCtrl.setRoot(TabsapplicationPage);
              // console.log(data);
          }else{
              this.showToastWithCloseButton();
          }
      }, err => {
          console.log(err);

      });
  }
/*
*           if (((this.credentials.password!=null) && (this.credentials.username!=null))){
          let loginCall = this.userService.Login(this.credentials);
          loginCall.subscribe(success => {
              if (success)//data['success']
              {
                  this.navCtrl.setRoot(TabsapplicationPage);
                  // console.log(data);
              }else{
                  this.showToastWithCloseButton();
              }
          }, err => {
              console.log(err);

          });
      }else{
          if (this.credentials.password==null||this.credentials.username!=null){
              this.showToastWithCloseButton1();
      }else if (this.credentials.username==null||this.credentials.password!=null){
          this.showToastWithCloseButton2();
      }else if (this.credentials.password==null ||this.credentials.username==null){ // ((this.credentials.password!="") && (this.credentials.username!=""))
              this.showToastWithCloseButton3();

      }}*/
  nextpage(){
     this.navCtrl.push(RecupererUtilisateurPage);
  }
    showToastWithCloseButton() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Verifier que vos login et mot de passe son correct !',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }
    showToastWithCloseButton1() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Inserez votre mot de passe!',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }
    showToastWithCloseButton2() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Inserez votre login!',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }
    showToastWithCloseButton3() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Le deux champs son vide inserez vos login et vos mot de passe pour ce connecté !',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }

}
/*
* if (this.gardien.email==""||this.gardien.prenom==""||this.gardien.nom==""||this.gardien.cin==""||this.gardien.numtel==""){
        this.showToastWithCloseButton1();
    }else{
    if (this.gardien.password1==""&&this.gardien.password2==""&&this.gardien.password3==""){

        this.profileProvider.updateProfile(this.userService.gardien['id'],this.gardien.email,this.gardien.prenom,this.gardien.cin,this.gardien.numtel,this.gardien.nom,this.gardien.password2).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
    }else {
        if(this.gardien.password1!=this.gardien.password2||this.gardien.password3==this.gardien.password2){
        this.profileProvider.updateProfile(this.userService.gardien['id'],this.gardien.email,this.gardien.prenom,this.gardien.cin,this.gardien.numtel,this.gardien.nom,this.gardien.password2).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
        }else{
            this.showToastWithCloseButton2();
        }
    }

  }*/