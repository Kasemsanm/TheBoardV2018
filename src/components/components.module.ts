import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ToDosComponent } from './to-dos/to-dos';
import { TaskComponent } from './task/task';
@NgModule({
	declarations: [ProgressBarComponent,
    ToDosComponent,
    TaskComponent],
	imports: [],
	exports: [ProgressBarComponent,
    ToDosComponent,
    TaskComponent]
})
export class ComponentsModule {}
