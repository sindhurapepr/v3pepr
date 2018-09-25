import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchasetrackingPage } from './purchasetracking';

@NgModule({
  declarations: [
    PurchasetrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchasetrackingPage),
  ],
})
export class PurchasetrackingPageModule {}
