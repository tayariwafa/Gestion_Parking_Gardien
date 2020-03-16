import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EspaicesPage } from '../pages/espaices/espaices';
import { DetailsPage } from '../pages/details/details';
import { MyApp } from './app.component';
import { RecupererUtilisateurPage } from '../pages/recuperer-utilisateur/recuperer-utilisateur' ;
import { SaisiePage } from '../pages/saisie/saisie';
import { LoginPage } from '../pages/login/login';
import { TabsapplicationPage } from "../pages/tabsapplication/tabsapplication";
import { SortiePageModule } from '../pages/sortie/sortie.module';
import { EntrerPageModule } from '../pages/entrer/entrer.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { DisponibilitePageModule } from '../pages/disponibilite/disponibilite.module';
import { MenuPage }from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile';
import { Sortie2Page } from '../pages/sortie2/sortie2';
import { SortiePage } from '../pages/sortie/sortie';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { ServerProvider } from '../providers/server/server';
import { ReserverpassagerPage } from '../pages/reserverpassager/reserverpassager';
import { ContactProvider } from '../providers/contact/contact';
import { DetailsProvider } from '../providers/details/details';
import { DisponibiliteProvider } from '../providers/disponibilite/disponibilite';
import { EntrerProvider } from '../providers/entrer/entrer';
import { EspaicesProvider } from '../providers/espaices/espaices';
import { ProfileProvider } from '../providers/profile/profile';
import { RecupererProvider } from '../providers/recuperer/recuperer';
import { ReserverpassagerProvider } from '../providers/reserverpassager/reserverpassager';
import { SortieProvider } from '../providers/sortie/sortie';
import { DataProvider } from '../providers/data/data';
//import { UserProvider } from '../providers/user/user';
import { MyParcUserProvider } from '../providers/my-parc-user/my-parc-user';
import { HttpModule } from '@angular/http';
import { LoginProvider } from '../providers/login/login';
import { RecupererServiceSaisieProvider } from '../providers/recuperer-service-saisie/recuperer-service-saisie';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SaisiePage,
    RecupererUtilisateurPage,
    DetailsPage,
    EspaicesPage,
    TabsapplicationPage,
    MenuPage,
    ProfilePage,
    SortiePage,
    Sortie2Page,
    ReserverpassagerPage
    
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //SortiePageModule,
    EntrerPageModule,
    ContactPageModule,
    DisponibilitePageModule,
    JsonpModule,
    HttpModule,
    HttpClientModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsapplicationPage,
    SaisiePage,
    RecupererUtilisateurPage,
    DetailsPage,
    EspaicesPage,
    MenuPage,
    ProfilePage,
    SortiePage,
    Sortie2Page,
    ReserverpassagerPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServerProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider,
    ContactProvider,
    DetailsProvider,
    DisponibiliteProvider,
    EntrerProvider,
    EspaicesProvider,
    ProfileProvider,
    RecupererProvider,
    ReserverpassagerProvider,
    SortieProvider,
    DataProvider,
    //UserProvider,
    MyParcUserProvider,
    LoginProvider,
    RecupererServiceSaisieProvider,
   
  ]
})
export class AppModule {}
