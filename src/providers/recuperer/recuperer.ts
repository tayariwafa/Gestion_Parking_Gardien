import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecupererProvider {
  gardien : Array <any>;
  cin_g:string;
  tel_g:string;
  apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/gardiens'; //url d'api de renouvellement de mode de passe
  constructor(public http: HttpClient) {

  }
    recupererGardien(cin_g:string,tel_g:string){
        let headers = { 'Content-Type': 'application/json' };
        var myData = JSON.stringify({cin:this.cin_g});
        return this.http.post(this.apiUrl+'/'+cin_g+'/'+tel_g+'/recuperer',JSON.stringify(myData),{headers:headers,params:{'cin_g':this.cin_g,'tel_g':this.tel_g}})
        .map(result => {
          console.log(result);
            if (result['succes']) {
                this.gardien = result['gardiens'];
                return true;
            }else{
                alert(result['error']);
            }
            return false;
        });

  }
}
