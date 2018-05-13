import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ToDosComponent } from './to-dos/to-dos';
@NgModule({
	declarations: [ProgressBarComponent,
    ToDosComponent],
	imports: [],
	exports: [ProgressBarComponent,
    ToDosComponent]
})
export class ComponentsModule {}
