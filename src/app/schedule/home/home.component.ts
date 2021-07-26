import { Component, OnInit } from '@angular/core';
import { Task } from '../types/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: Array<Task> = [
    {
      id: 1,
      displayText: 'Revisar Correo',
      status: 'done'
    },
    {
      id: 1,
      displayText: 'Revisar Agenda',
      status: 'onGoing'
    },
    {
      id: 1,
      displayText: 'Scrum Daily',
      status: 'pending'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    const idsArray = this.tasks.map(element => element.id)
    const newId = Math.max(...idsArray) + 1;
    console.log('Nuevo id', newId);

    this.tasks.push({id: newId, displayText: 'Nueva Tarea', status: 'pending'})
  }

  selectedTask?: Task;
  setSelectedTask(task: Task) {
    console.log('select taks', task)
    this.selectedTask = task;
  }


}
