import { HttpClient,HttpHeaders ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EspaicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EspaicesProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';//l'url du calcule de montant a payer
  apiUrl1 = 'https://jsonplaceholder.typicode.com';//l'url li bech ua3mel update 3al reservation w ysajel l montant payer
  constructor(public http: HttpClient,headers:HttpHeaders,params:HttpParams) {
    console.log('Hello RestServiceProvider Provider');
  }
  getMontant() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/montant').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  saveMontant(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl1+'/montant', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  /**
  addUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}  */

 
}
