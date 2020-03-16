
import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ServerProvider {
 

  constructor() {
    console.log('Hello ServerProvider Provider');
  }
  getLocalDataentrer() {
   /* this.http.get('../assets/data/cards.json').map(res => res.json()).subscribe(data => 
    {
      console.log(data);
    }); 
    h
    ttp.get('../assets/data/cards.json').map(res => res.json()).subscribe(data => 
      {
        console.log(data);
      });*/ 
    data=>[
      {matricule:'23564875'},
      {matricule:'19219219'},
      {matricule:'25469873'},
      {matricule:'25469873'},
      {matricule:'00555871'},
      {matricule:'10264875'}
    ];
  }
  getLocalData() {
    /* this.http.get('../assets/data/cards.json').map(res => res.json()).subscribe(data => 
     {
       console.log(data);
     }); */ 
     data=>[
 
 
     ];
   }
  

}
