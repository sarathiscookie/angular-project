import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message = 'Hello from child.';

  @Input() passValueFromParentTOChild: string = '';

  @Output() passValuesFromChildToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  passValuesFromChildToParentFunction() {
    this.passValuesFromChildToParent.emit('Hello message from child via binding output!');
  }

}
