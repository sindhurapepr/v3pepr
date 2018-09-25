import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsmanagerPage } from './settingsmanager';

@NgModule({
  declarations: [
    SettingsmanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsmanagerPage),
  ],
})
export class SettingsmanagerPageModule {}
