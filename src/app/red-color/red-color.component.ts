import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-color',
  templateUrl: './red-color.component.html',
})
export class RedColorComponent {
  @Input() tooltip: string;
}
