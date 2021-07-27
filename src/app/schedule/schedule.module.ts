import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ControlsModule } from '../controls/controls.module';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewColumntaskComponent } from './new-columntask/new-columntask.component';
import { TaskCardComponent } from '../controls/task-card/task-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    TaskEditorComponent,
    NewTaskComponent,
    NewColumntaskComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    ControlsModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ScheduleModule { }
