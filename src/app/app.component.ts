import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MenuperformancePage } from '../pages/menuperformance/menuperformance';
import { MenuengineeringPage } from '../pages/menuengineering/menuengineering';
import { ModmanagerPage } from '../pages/modmanager/modmanager';
import { PrepmanagerPage } from '../pages/prepmanager/prepmanager';
import { InventorymanagerPage } from '../pages/inventorymanager/inventorymanager';
import { InventorylistmanagerPage } from '../pages/inventorylistmanager/inventorylistmanager';
import { PurchasetrackingPage } from '../pages/purchasetracking/purchasetracking';
import { InvoiceuploadsPage } from '../pages/invoiceuploads/invoiceuploads';
// import { LogoutPage } from '../pages/logout/logout';
import { SettingsmanagerPage } from '../pages/settingsmanager/settingsmanager';
import { IngredientpricetrackerPage } from '../pages/ingredientpricetracker/ingredientpricetracker';
import { LaborsummaryPage } from '../pages/laborsummary/laborsummary';
import { PPage } from '../pages/p/p';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(private alertCtrl: AlertController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Org Dashboard', component: HomePage},
      { title: 'My Dashboard', component: DashboardPage },
      { title: 'Menu performance', component: MenuperformancePage },
      { title: 'Menu engineering', component: MenuengineeringPage },
      { title: 'Mod Manager', component: ModmanagerPage },
      { title: 'Prep Manager', component: PrepmanagerPage },
      { title: 'Inventory Manager', component: InventorymanagerPage },
      { title: 'Inventory List Manager', component: InventorylistmanagerPage },
      { title: 'Purchase Tracking', component: PurchasetrackingPage },
      { title: 'Invoice Uploads', component: InvoiceuploadsPage },
      { title: 'P&L Summary', component: PPage },
      { title: 'Labor Summary', component: LaborsummaryPage },
      { title: 'Ingredient Price Tracker', component: IngredientpricetrackerPage },
      { title: 'Settings manager', component: SettingsmanagerPage },
      { title: 'Logout', component: null},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure you want to Logout?',
      // message: 
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

//   openPage(page) {
//     // Reset the content nav to have just this page
//     // we wouldn't want the back button to show in this scenario
//     this.nav.setRoot(page.component);
//   }
// }

openPage(page) {

  if (page.component) {
    this.nav.setRoot(page.component);
  } else {
    this.presentConfirm();

  }
}
}
