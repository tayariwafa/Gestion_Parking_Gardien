import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {SortieProvider} from "../sortie/sortie";

/*
  Generated class for the DetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailsProvider {
    apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/reservations';
    apiUr11 = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/voitures';
    voitures : Array <any>;
    Matricule:string;
    Monatnt: string;
    Surplus: string;
    MontantTotale: string;
  constructor(public http: HttpClient,public sortieMatricule: SortieProvider) {
    console.log('Hello RestServiceProvider Provider');
      this.Matricule=this.sortieMatricule.voitures['Matricule'];
      console.log(this.Matricule);
  }
    getVoiture(Matricule:string) {
        return new Promise(resolve => {
            this.http.get(this.apiUr11+'/'+Matricule+'/voituredetails').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
    CalculerMontantP(Matricule:string) {
    let headers = { 'Content-Type': 'application/json' };
    var myData = JSON.stringify({Matricule: Matricule});
    return this.http.post(this.apiUrl+'/'+Matricule+'/CalculerMonatntPayer',JSON.stringify(myData),{headers:headers,params:{'Matricule':Matricule}})
    .map(data => {
        console.log(data);
        this.voitures = data["voitures"];
        this.Monatnt = data["montant"];
        this.Surplus = data["surplus"];
        this.MontantTotale = data["totale"];
      }, err => {
        console.log(err);
      });

  }

  /*
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    params: new HttpParams().set('id', '3'),
  })
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  });
  */
}
