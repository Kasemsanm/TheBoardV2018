import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectTaskPage } from './project-task';

@NgModule({
  declarations: [
    ProjectTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectTaskPage),
  ],
})
export class ProjectTaskPageModule {}
