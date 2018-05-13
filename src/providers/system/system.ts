import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SinginPage } from '../../pages/singin/singin';

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {

  auth = false;
  constructor(public http: HttpClient,private navCtrl:NavController) {
    console.log('Hello SystemProvider Provider');
  }

  Singin(){
    this.auth = true;
  }

  Singup(){
    
  }

  Singout(){
    this.auth = false;
  }

  Authentication(){
    if(!this.auth){
      this.navCtrl.setRoot(SinginPage)
    }
    return this.auth;
  }

}
