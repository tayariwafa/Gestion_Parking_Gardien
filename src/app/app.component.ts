import { Component,ViewChild , Input } from '@angular/core';
import { MenuController, Platform , NavController,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { DisponibilitePage } from '../pages/disponibilite/disponibilite';
import { ProfilePage } from '../pages/profile/profile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav : Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage1(){
    this.nav.setRoot(ProfilePage);
  }
  openPage2(){
    this.nav.setRoot(ContactPage);
  }
  openPage3(){
    this.nav.setRoot(DisponibilitePage);

  }
  openPage4(){
    this.nav.setRoot(LoginPage);
  }
}

