import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() Item:string;
  @Output() changed = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.changed.emit('Laptop');
  }

}
