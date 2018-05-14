import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { TheBoardPage } from '../the-board/the-board';
import { NgForm } from '@angular/forms'
import { ModalController, ViewController } from 'ionic-angular';

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

  error:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private system:SystemProvider,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    if(this.system.Authenticated) this.navCtrl.setRoot(TheBoardPage);
  }

  Singin(acount:NgForm){
    this.system.Singin(acount.value['Email'],acount.value['Password']).then(
      (success) => {
        this.navCtrl.setRoot(TheBoardPage);
        this.system.Authenticated = true;
      }).catch(
        (err) => {
          this.error = err;
          console.log(err);
        })    
  }

}
