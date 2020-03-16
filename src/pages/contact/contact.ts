import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ContactProvider } from '../../providers/contact/contact';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contact: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public contactProvider: ContactProvider) {
    this.getContact();    
  }
  getContact() {
     this.contactProvider.getContact()
     .then(data => {
       this.contact = data;
       console.log(this.contact);
     });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  quitter3(){
    this.navCtrl.popTo(LoginPage);
  } 


}
