import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  toggleText = false;

  todaysDate  = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFunction(event): void {
    this.toggleText = !this.toggleText;
    console.log(event);
  }
}
