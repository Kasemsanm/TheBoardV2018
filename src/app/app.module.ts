import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

@NgModule({
  declarations: [
    MyApp,
    TheBoardPage,
    SinginPage,
    SingupPage,
    ProgressBarComponent,
    ToDosComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TheBoardPage,
    SinginPage,
    SingupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SystemProvider
  ]
})
export class AppModule {}
