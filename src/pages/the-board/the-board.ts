import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { SinginPage } from '../singin/singin';
import { ModalController } from 'ionic-angular';
import { AddToDoPage, ToDo, ToDos } from '../add-to-do/add-to-do';
import { AddProjectPage } from '../add-project/add-project';

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
  ListToDos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private system: SystemProvider, private ModalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    
    if (!this.system.Authenticated) {
      //this.navCtrl.setRoot(SinginPage,null);
    }
    else{
    }
    this.GetToDos();
  }

  AddToDo() {
    let modal = this.ModalCtrl.create(AddToDoPage);
    modal.present();
  }

  AddProject() {
    let modal = this.ModalCtrl.create(AddProjectPage);
    modal.present();
  }

  async GetToDos() {
    this.ListToDos = await this.system.GetToDos();
  }

}
