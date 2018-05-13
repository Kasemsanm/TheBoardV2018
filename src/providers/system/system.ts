import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {

  auth = false;
  constructor(public http: HttpClient) {
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
    return this.auth;
  }

}
