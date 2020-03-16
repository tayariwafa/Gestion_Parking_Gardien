import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataProvider } from "../data/data";

@Injectable()
export class EntrerProvider {
  apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/reservations';//a modifier //url d'api pour lire tout les reservation get
    items: string[];
    id:string;
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

    lIRELISTEMATRICULE(id:string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/'+id+'/afficherlisteMatriculeReserver').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  /*
    getItems(ev) {
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

    /*
    conserverReservation(voiture) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl1+'/conserver', JSON.stringify(voiture))
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }*/
/*
this.http.post(this.apiUrl+'/reservation', JSON.stringify(data), {
    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    params: new HttpParams().set('id', '3'),
  })
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);npm rebuild node-sass --force
  });
   */

}
