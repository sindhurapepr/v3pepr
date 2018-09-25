import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventorymanagerPage } from './inventorymanager';

@NgModule({
  declarations: [
    InventorymanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(InventorymanagerPage),
  ],
})
export class InventorymanagerPageModule {}
