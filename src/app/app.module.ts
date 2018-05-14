import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TheBoardPage } from '../pages/the-board/the-board';
import { SinginPage } from '../pages/singin/singin';
import { SingupPage } from '../pages/singup/singup';
import { SystemProvider } from '../providers/system/system';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { ToDosComponent } from '../components/to-dos/to-dos';
import { TaskComponent } from '../components/task/task';
import { ProjectsPage } from '../pages/projects/projects';
import { FirebaseConfig } from './firebase.config';
import { AngularFireAuthModule } from 'angularfire2/Auth';
import { FormsModule } from '@angular/forms';
import { SingoutPage } from '../pages/singout/singout';
import { AddToDoPage } from '../pages/add-to-do/add-to-do';
import { AddProjectPage } from '../pages/add-project/add-project';

@NgModule({
  declarations: [
    MyApp,
    TheBoardPage,
    SinginPage,
    SingupPage,
    ProgressBarComponent,
    ToDosComponent,
    TaskComponent,
    ProjectsPage,
    SingoutPage,
    AddToDoPage,
    AddProjectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TheBoardPage,
    SinginPage,
    SingupPage,
    ProjectsPage,
    SingoutPage,
    AddToDoPage,
    AddProjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SystemProvider
  ]
})
export class AppModule {}
