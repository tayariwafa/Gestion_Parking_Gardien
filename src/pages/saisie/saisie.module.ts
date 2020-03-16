import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaisiePage } from './saisie';

@NgModule({
  declarations: [
    SaisiePage,
  ],
  imports: [
    IonicPageModule.forChild(SaisiePage),
  ],
})
export class SaisiePageModule {}
