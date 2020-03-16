import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataProvider } from "../data/data";


@Injectable()
export class ProfileProvider {
    id:string;
    email_g:string;
    Prenom_g:string;
    cin_g:string;
    tel_g:string;
    Nom_g:string;
    mdp_g:string;
  apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/gardiens';//url   pour lire les donner d'un gardien  get
  apiUrl1 = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/gardiens';//url pour l'api de modification du gardien
  constructor(public http: HttpClient) {
    console.log('Hello ProfileProvider Provider');
  }
  getProfile(id:string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  updateProfile(id:string,email_g:string,Prenom_g:string,Nom_g:string,cin_g:string,tel_g:string) { //badalt data bel gardien 5ater donner a modifier
      let headers = { 'Content-Type': 'application/json' }; //,mdp_g:string
      var myData = JSON.stringify({Id: this.id});
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl1+'/'+id+'/'+email_g+'/'+Prenom_g+'/'+Nom_g+'/'+cin_g+'/'+tel_g+'/modifierprofile', JSON.stringify(myData), //'/'+mdp_g+'/'+
          {headers:headers,params:{'id':this.id,'email_g':this.email_g,'Prenom_g':this.Prenom_g,'Nom_g':this.Nom_g,'cin_g':this.cin_g,'tel_g':this.tel_g}})//,'mdp_g':this.mdp_g
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
