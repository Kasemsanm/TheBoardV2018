import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { SinginPage } from '../singin/singin';

/**
 * Generated class for the TheBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-the-board',
  templateUrl: 'the-board.html',
})
export class TheBoardPage {
  loadProgress = 50;
  constructor(public navCtrl: NavController, public navParams: NavParams, private system:SystemProvider) {
  }
  
  ionViewDidLoad() {
    if(!this.system.Authentication()) this.navCtrl.setRoot(SinginPage);
  }

}
