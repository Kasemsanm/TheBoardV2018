import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { TheBoardPage } from '../the-board/the-board';

/**
 * Generated class for the SinginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singin',
  templateUrl: 'singin.html',
})
export class SinginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private system:SystemProvider) {
  }

  ionViewDidLoad() {
    if(this.system.Authentication()) this.navCtrl.setRoot(TheBoardPage);
  }

  Singin(){
    this.system.Singin();
    this.navCtrl.setRoot(TheBoardPage);
  }

}
