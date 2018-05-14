import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/Auth';
import { AngularFireDatabase } from 'angularfire2/database';
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

  GetToDos(){
    return this.db.list("Users/"+this.UID+"ToDos/");
  }

  GetTasks(){
    return this.db.list("Users/"+this.UID+"Tasks/");
  }

  GetProjects(){
    return this.db.list("Users/"+this.UID+"Projects/");
  }

  GetProject(PID:string){
    return this.db.list("Project/"+PID);
  }

  AddToDo(item:any){
    this.db.list("Users/"+this.UID+"ToDos/").push(item);
  }

  AddTask(item:any){
    this.db.list("Users/"+this.UID+"Tasks/").push(item);
  }

  AddProjects(item:any){
    this.db.list("Users/"+this.UID+"Projects/").push(item);
  }

  AddProject(item:any){
    this.db.list("Project/").push(item);
  }

  UpdateToDo(ToDoID:string,item:any){
    this.db.list("Users/"+this.UID+"ToDos/").update(item,ToDoID);
  }

  UpdateTask(TaskID:string,item:any){
    this.db.list("Users/"+this.UID+"Tasks/").update(item,TaskID);
  }

  UpdateProjects(PID:string,item:any){
    this.db.list("Users/"+this.UID+"Projects/").update(item,PID);
  }

  UpdateProject(PID:string,item:any){
    this.db.list("Project/").update(item,PID);
  }
}
