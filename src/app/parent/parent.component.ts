import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  heading = 'Hello';

  feedback = 'Good condition';

  sColor = "red";

  sOutCome = "Learning Angular";

  @ViewChild('myDiv', {static: true}) refElement:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.refElement.nativeElement.innerText);
    this.refElement.nativeElement.innerText = "We will conclude here";
  }

  eventDemo = () => {
    console.log("after completing binding");
  }
}