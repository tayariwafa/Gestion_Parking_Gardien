import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider<T> {

  BaseUrl = 'https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/';//https://jawehergarma.azurewebsites.net/apiv3/web/index_dev.php/api/
//http://localhost/api2018/web/index_dev.php/api/
  constructor(public ApiName: string, public http: HttpClient) {
  }

  BuildUrl(apiName: string, apiVersion: string = 'v1') {
    return this.BaseUrl + apiVersion + '/' + apiName;
  }

  getAll(): Observable<Array<T>> {

      let ApiUri = this.BuildUrl(this.ApiName);

      return this.http.get(ApiUri)
      .map( data => data['msg']);
  }

  add(model: T): Observable<any> {
     let ApiUri = this.BuildUrl(this.ApiName + '/');
     return this.http
     .post(ApiUri, model, {headers: {'Content-Type': 'application/json'}})
     .map( data => data['msg']);
  }

  // add(model: T): Promise<void> {
  //   return new Promise(resolve => {
  //     let ApiUri = this.BuildUrl(this.ApiName + '/');
  //     this.http.post(ApiUri, model).subscribe(data => {
  //       resolve(data['msg']);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }



  update(id : number, model: T) : Observable<any> {
    let ApiUri = this.BuildUrl(this.ApiName+ '/' + id + '/m');
    return  this.http.post(ApiUri, model).map( data => data['msg']);
      }

  getById(id: number): Observable<any>
  {
      let currentApiName = this.ApiName + '/' + id;
      let contactApiUri = this.BuildUrl(currentApiName);
      return this.http.get(contactApiUri).map( data => data['msg']);
  }
}
