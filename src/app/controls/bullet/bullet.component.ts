import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const StatusBulletColor = {
  pending: 'lightgray',
  onGoing: 'lightblue',
  done: 'lightgreen'
}

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @Input() displayText = '';
  @Input() status: keyof typeof StatusBulletColor = 'pending';
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  getBorder() {
    return `4px solid ${StatusBulletColor[this.status]}`
  }

}
