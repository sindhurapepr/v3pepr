import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginMdl } from '../../Models/LoginMdl';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginMdl = new LoginMdl();
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private alertCtrl: AlertController) {
  }
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  Login()
  {
  //   var url:string="https://20-dot-isb-alpha.appspot.com/_ah/api/pepr/v1/loginv2"
  //   this.http.post(url,this.loginMdl).subscribe(data=>
  //   {
  //     console.log("response");
  //     console.log(data);
  //     console.log(data.meta);
  //       var result: any = data;
  //       this.loginMdl = result;
  //       // this.navCtrl.push(HomePage);
  //       console.log(data.meta.success);
  //     if(this.loginMdl.meta.success)
  //     {
        this.navCtrl.push(HomePage);
  //     }
  //     else{
  //       this.presentAlert("Login Failed");
  //     } 
  //   })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
