import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {
  apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/contact';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
getContact() {
    return new Promise(resolve => {
       this.http.get(this.apiUrl+'/').subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
     });

  }
 /* addContact(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/contact', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });*/
  }

