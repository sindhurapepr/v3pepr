import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventorylistmanagerPage } from './inventorylistmanager';

@NgModule({
  declarations: [
    InventorylistmanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(InventorylistmanagerPage),
  ],
})
export class InventorylistmanagerPageModule {}
