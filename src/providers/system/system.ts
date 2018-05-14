import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/Auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToDos } from '../../pages/add-to-do/add-to-do';
import { ProjectItem } from '../../pages/add-project/add-project';
/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {
  Authenticated = false;
  Lock = false;
  email:any;
  password:any;
  UID:any;
  constructor(public http: HttpClient, private afAuth:AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(
      (user) => {
        this.UID = user.uid
      });
  }

  Singin(email:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  Singup(email:string,password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  UnLockScreen(password:string){
    if(password == this.password){
      this.Lock = false;
      return true;
    }
    else{
      this.Lock = true;
      return false;
    }
  }

  Singout(){
    return this.afAuth.auth.signOut();
  }

  LockScreen(){
    return this.Lock;
  }

  async GetToDos(){
    return await this.db.list("Users/"+this.UID+"/ToDos/").valueChanges()
  }

  GetTasks(){
    return this.db.list("Users/"+this.UID+"/Tasks/").valueChanges();
  }

  GetProjects(){
    return this.db.list("Project/").valueChanges();
  }

  GetProject(PID:string){
    return this.db.list("Project/"+PID).valueChanges();
  }

  AddToDo(item:ToDos){
    this.db.list("Users/"+this.UID+"/ToDos/").push(item);
  }

  AddTask(item:any){
    this.db.list("Users/"+this.UID+"/Tasks/").push(item);
  }

  AddProjects(item:any){
    this.db.list("Users/"+this.UID+"/Projects/").push(item);
  }

  AddProject(item:ProjectItem){
    return this.db.list("Project/").push(item).then((success) => {
      this.AddProjects({key:success.key});
    });
  }

  UpdateToDo(ToDoID:string,item:any){
    this.db.list("Users/"+this.UID+"/ToDos/").update(item,ToDoID);
  }

  UpdateTask(TaskID:string,item:any){
    this.db.list("Users/"+this.UID+"/Tasks/").update(item,TaskID);
  }

  UpdateProjects(PID:string,item:any){
    this.db.list("Users/"+this.UID+"/Projects/").update(item,PID);
  }

  UpdateProject(PID:string,item:any){
    this.db.list("Project/").update(item,PID);
  }
}
