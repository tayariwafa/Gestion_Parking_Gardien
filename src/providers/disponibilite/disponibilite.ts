import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DisponibiliteProvider {
  apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/places'; ///a modifier avec l' url de l'api
    constructor(public http: HttpClient) {
    console.log('Hello Provider of the disponibilitie');
  }
  getdisponibilite($Id_park) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/'+$Id_park).subscribe(data => {
        resolve(data);
          console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
