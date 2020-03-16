import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntrerPage } from '../../pages/entrer/entrer';


@Injectable()
export class LoginProvider {
    Token : string = null ;

    Username : string;

    nom:   string;

    email : string;

    numtel :  string;

    mat : string;

    couleur : string;

    marque : string;
  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient,public navCtrl: NavController) {
    console.log('Hello LoginProvider Provider');
  }
Login(username: string,password:string, navCtrl : NavController) {
      return new Promise(resolve => {

      let apiUrl = 'https://jsonplaceholder.typicode.com';

      this.http.get(apiUrl+"/"+username+"/"+password).subscribe(data => {
      if (data['code']==0)
      {
        this.Username = username;
        navCtrl.setRoot(EntrerPage);
      }else{
          alert(data['error'])
      }
      }, err => {
        console.log(err);
      });
    });
}

getDetails() {
    return new Promise(resolve => {
        let apiUrl ='https://jsonplaceholder.typicode.com'; // this.BuildUrl('user/get');

        this.http.get(apiUrl+"/"+this.Username+"/").subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
}

}
