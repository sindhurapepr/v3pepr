import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
 import {HttpModule} from '@angular/http';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MenuperformancePage } from '../pages/menuperformance/menuperformance';
import { MenuengineeringPage } from '../pages/menuengineering/menuengineering';
import { ModmanagerPage } from '../pages/modmanager/modmanager';
import { PrepmanagerPage } from '../pages/prepmanager/prepmanager';
import { InventorymanagerPage } from '../pages/inventorymanager/inventorymanager';
import { InventorylistmanagerPage } from '../pages/inventorylistmanager/inventorylistmanager';
import { PurchasetrackingPage } from '../pages/purchasetracking/purchasetracking';
import { InvoiceuploadsPage } from '../pages/invoiceuploads/invoiceuploads';
import { LogoutPage } from '../pages/logout/logout';
import { SettingsmanagerPage } from '../pages/settingsmanager/settingsmanager';
import { IngredientpricetrackerPage } from '../pages/ingredientpricetracker/ingredientpricetracker';
import { LaborsummaryPage } from '../pages/laborsummary/laborsummary';
import { PPage } from '../pages/p/p';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
    MenuperformancePage,
    MenuengineeringPage,
    ModmanagerPage,
    PrepmanagerPage,
    InventorymanagerPage,
    InventorylistmanagerPage,
    PurchasetrackingPage,
    InvoiceuploadsPage,
    LogoutPage,
    SettingsmanagerPage,
    IngredientpricetrackerPage,
    LaborsummaryPage,
    PPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
    MenuperformancePage,
    MenuengineeringPage,
    ModmanagerPage,
    PrepmanagerPage, InventorymanagerPage,
    InventorylistmanagerPage,
    PurchasetrackingPage,
    InvoiceuploadsPage,
    LogoutPage,
    SettingsmanagerPage,
    IngredientpricetrackerPage,
    LaborsummaryPage,
    PPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
