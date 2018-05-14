import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the AddToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class ToDo{
  $key:string;
  todo:string;
  deadline:Number;
  check:string = "flase"
}

export class ToDos{
  $key:string;
  Title:string;
  ToDo:ToDo[];
}

@IonicPage()
@Component({
  selector: 'page-add-to-do',
  templateUrl: 'add-to-do.html',
})
export class AddToDoPage {

  Title:string;
  Todos = new Array<ToDo>();
  todo = "";
  deadline = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private ViewCtrl:ViewController, private system:SystemProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToDoPage');
  }

  addToDo(){
    let temp:ToDo = new ToDo();
    temp.todo = this.todo;
    temp.deadline = Date.parse(this.deadline);
    console.log(temp);
    this.Todos.push(temp);
    this.todo = "";
    this.deadline = ""
  }

  SaveToDos(){
    let temp = new ToDos();
    temp.Title = this.Title;
    temp.ToDo = this.Todos;
    this.system.AddToDo(temp);
    this.dismiss();
  }

  GetDate(time:any){
    return new Date(time).toLocaleString()
  }

  dismiss(){
    this.ViewCtrl.dismiss()
  }

}
