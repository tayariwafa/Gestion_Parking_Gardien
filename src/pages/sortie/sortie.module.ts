import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortiePage } from './sortie';

@NgModule({
  declarations: [
    SortiePage,
  ],
  imports: [
    IonicPageModule.forChild(SortiePage),
  ],
})
export class SortiePageModule {}
