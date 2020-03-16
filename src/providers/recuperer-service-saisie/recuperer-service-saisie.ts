import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the RecupererServiceSaisieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecupererServiceSaisieProvider {
    gardien : Array <any>;
    id: string[];
    mdp_g:string;
    apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/gardiens';
    constructor(public http: HttpClient) {
    console.log('Hello RecupererServiceSaisieProvider Provider');
  }
  Confirmer(id:string,mdp_g:string){
      let headers = { 'Content-Type': 'application/json' };
      var myData = JSON.stringify({mdp:this.mdp_g});
            return this.http.post(this.apiUrl+'/'+id+'/'+mdp_g+'/renouvler',JSON.stringify(myData),{headers:headers,params:{'id':this.id,'mdp_g':this.mdp_g}})
                .map(result => {
                    console.log(result);
                    if (result['succes']) {
                        return true;
                    }else{
                        alert(result['error']);
                    }
                    return false;
                });

    }
}
