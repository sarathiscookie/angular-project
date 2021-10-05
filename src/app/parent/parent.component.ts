import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  responsive = true;

  tableInfo = true;

  customerSuccess = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
