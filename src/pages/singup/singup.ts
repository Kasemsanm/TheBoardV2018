import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { TheBoardPage } from '../the-board/the-board';
import { NgForm } from '@angular/forms';
import { SinginPage } from '../singin/singin';

/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private system:SystemProvider,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    if(this.system.Authenticated) this.navCtrl.setRoot(TheBoardPage);
  }

  Singup(acount:NgForm){
    this.system.Singup(acount.value['Email'].toString() ,acount.value['Password'].toString() ).then(
      (success) => {
        this.navCtrl.setRoot(SinginPage);
      }).catch(
        (err) => {
          this.error = err;
          console.log(err);
        })    
  }

  GotoSingIn(){
    this.navCtrl.setRoot(SinginPage);
  }

}
