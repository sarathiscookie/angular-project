import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() emitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEventFunction() {
    this.emitEvent.emit('Event emitted from child');
  }

}
