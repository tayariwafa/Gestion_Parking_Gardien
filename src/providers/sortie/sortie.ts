import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataProvider } from "../data/data";

@Injectable()
export class SortieProvider {
    apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/voitures';
    apiUrl1 = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/reservations';//url getreservation
    matricule:string;
    id:string;
    voitures = {  id: '',Matricule: '', Marque: '', couleur: '', Id_ut: ''};
  constructor(public http: HttpClient) {
    console.log('Hello SortieProvider Provider');
  }
  getDetails(Matricule:string) {
  return new Promise(resolve => {
   this.http.get(this.apiUrl+'/'+Matricule+'/voituredetails').subscribe(data => {//
    resolve(data);
   }, err => {
     console.log(err);
     });
  });
  }
    lIRELISTEMATRICULESORTIE(id:string) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl1+'/'+id+'/listeMatricule').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
}
