import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ReserverpassagerProvider {
    Matricule:string;
    Id_park:string;
    id:string;
    msg: string;
  apiUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/v1/voitures'; //url d'api de reservation d'un passager feha deux insertion
  constructor(public http: HttpClient) {

    console.log('Hello ReserverpassagerProvider Provider');
  }
  reserverPassager(Matricule:string,Id_park:string,id:string){

      let headers = { 'Content-Type': 'application/json' };
      var myData = JSON.stringify({Matricule:Matricule,Id_park:Id_park,id:id});

     return this.http.post(this.apiUrl+'/'+Matricule+'/'+Id_park+'/'+id+'/reserverPassager', JSON.stringify(myData), //'/'+Matricule+'/'+Id_park+'/'+id+
          {headers:headers,params:{'Matricule':Matricule,'Id_park':Id_park,'Id_Gard':id}})
        .map(data => {
            console.log(data);
            if (data['success']) {
                this.msg = data["msg"];
                return true;
            }else{
                alert(data['error']);
            }
            return false;
        }
    );
  }
}
