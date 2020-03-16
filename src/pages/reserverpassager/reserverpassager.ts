import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { ReserverpassagerProvider } from '../../providers/reserverpassager/reserverpassager';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';

@IonicPage()
@Component({
  selector: 'page-reserverpassager',
  templateUrl: 'reserverpassager.html',
})
export class ReserverpassagerPage {
  passager = { Matricule: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicerestProvider: ReserverpassagerProvider,public  userService : MyParcUserProvider
      , public aletCtrl: AlertController,public toastCtrl: ToastController) {
      this.reserverPassager();
  }
  reserverPassager() {
      this.ServicerestProvider.reserverPassager(this.passager.Matricule,this.userService.gardien['Id_park'],this.userService.gardien['id'])
      .subscribe(success => {
       if (success)//data['success']
       {
           this.navCtrl.setRoot(ReserverpassagerPage);
           this.showToastWithCloseButton();
           // console.log(data);
       }else{
           this.showToastWithCloseButton2();
       }

    }, (err) => {
      console.log(err);
    });
  }
    showToastWithCloseButton() { //position: string
        const toast = this.toastCtrl.create({
            message: 'Reservation effectuer  avec succès ',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }
    showToastWithCloseButton2() { //position: string
        const toast = this.toastCtrl.create({
            message: 'l n exsiste pas des places disponible',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserverpassagerPage');
  }

}
