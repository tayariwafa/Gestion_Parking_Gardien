import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisponibilitePage } from './disponibilite';

@NgModule({
  declarations: [
    DisponibilitePage,
  ],
  imports: [
    IonicPageModule.forChild(DisponibilitePage),
  ],
})
export class DisponibilitePageModule {}
