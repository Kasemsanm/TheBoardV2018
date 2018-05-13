import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheBoardPage } from './the-board';

@NgModule({
  declarations: [
    TheBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(TheBoardPage),
  ],
})
export class TheBoardPageModule {}
