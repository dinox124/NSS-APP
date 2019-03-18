import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NssPage } from './nss';

@NgModule({
  declarations: [
    NssPage,
  ],
  imports: [
    IonicPageModule.forChild(NssPage),
  ],
})
export class NssPageModule {}
