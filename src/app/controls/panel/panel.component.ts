import { Component, Input, OnInit } from '@angular/core';

const PaddingConfig = {
  narrow: '15px',
  medium: '25px',
  wide: '35px'
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() padding: keyof typeof PaddingConfig = 'medium';
  @Input() height = '';

  getPadding() {
    return PaddingConfig[this.padding];
  }

  getHeight() {
    return this.height;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
