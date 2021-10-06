import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() count: number;

  @Output() emitResult = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  inc() {
    this.result(+1);
  }

  dec() {
    this.result(-1);
  }

  result(data: number) {
    this.count = this.count + data;
    this.emitResult.emit(this.count);
  }

}
