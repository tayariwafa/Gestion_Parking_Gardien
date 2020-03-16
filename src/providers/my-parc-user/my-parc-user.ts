import
{ HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { UserModel } from '../../models/UserModel';
import { Observable } from 'rxjs/Observable';
import { LoginMV } from '../../ViewModels/LoginMV';

/*
  Generated class for the MyParcUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyParcUserProvider extends DataProvider<UserModel> {

  Token: string = null;
  Username: string;
  gardien : Array <any>;
  parkings : Array <any>;
  places : Array <any>;
  reservations : Array <any>;
  voitures : Array <any>;
  constructor(private Http: HttpClient) {
    super('gardien', Http);
  }
  
  Login(model: LoginMV): Observable<boolean> {
    let ApiUri = this.BuildUrl('gardiens/login/gardien');
    let headers = { 'Content-Type': 'application/json' };

    var myData = JSON.stringify({username: model.username});

    return this.http.post(ApiUri,JSON.stringify(myData),{headers:headers,params:{'username':model.username,'password':model.password}})
      .map(data => {
        console.log(data);
        if (data['success']) {
          this.Token = data["token"];
          this.gardien = data["gardiens"];
          this.parkings = data["parkings"];
          this.places = data["places"];
          this.reservations = data["reservations"];
          this.voitures = data["voitures"];
          this.Username = model.username;
          return true;
        }else{
          alert(data['error']);
        }
        return false;
      }

      );

  }



  IsLoggedIn() {
    return this.Token != null;
  }

  Logout() {
    this.Token = null;
  }
}

