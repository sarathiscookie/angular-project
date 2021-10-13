import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  isSpecial = false;

  isActive = false;

  classes = {};

  tdClass = {};

  trClass = {};

  styles = {};

  constructor() { }

  ngOnInit(): void {
    this.setClasses();
    this.setStyles();
    this.setTrClass();
    this.setTdClass();
  }

  setClasses() {
    this.classes = {
      'table': true,
      'table-stripped': true,
      'table-secondary': false,
      'table-hover': true 
    }
  }

  setTdClass() {
    this.tdClass = {
      'table-success': true
    }
  }

  setTrClass() {
    this.trClass = {
      'table-warning': true
    }
  }

  setStyles() {
    this.styles = {
      'font-size': 'small',
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }

}