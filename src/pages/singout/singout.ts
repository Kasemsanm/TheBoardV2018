import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { SinginPage } from '../singin/singin';

/**
 * Generated class for the SingoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singout',
  templateUrl: 'singout.html',
})
export class SingoutPage {
  error:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private system:SystemProvider) {
  }

  ionViewDidLoad() {
    this.system.Singout().then(
      (success) => {
        this.system.Authenticated = false;
        this.navCtrl.setRoot(SinginPage);
      }).catch(
        (err) => {
          this.error = err;
          console.log(err);
        });
  }

}
