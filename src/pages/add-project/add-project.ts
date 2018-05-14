import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class ProjectItem {
  $key:string;
  PjName:string;
  Progress:Number = 0;
}

@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {

  Projects:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ViewCtrl:ViewController, private system:SystemProvider) {
  }

  ProjectName:string;
  ionViewDidLoad() {
  }

  SaveProject(){
    let temp = new ProjectItem();
    temp.PjName = this.ProjectName;
    this.system.AddProject(temp);
    this.dismiss();
  }

  dismiss(){
    this.ViewCtrl.dismiss()
  }
}
