import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { AddProjectPage } from '../add-project/add-project';
import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  Projects:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ModalCtrl:ModalController, private system:SystemProvider) {
  }

  ionViewDidLoad() {
    this.Projects = this.system.GetProjects();
  }

  AddProject() {
    let modal = this.ModalCtrl.create(AddProjectPage);
    modal.present();
  }

}
