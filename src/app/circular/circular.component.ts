import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  
  todos =[
    'wash coffee mug',
    'Take a shower',
    'say hi to the new hire',
    'Make breakfast'
  ];

  happy = 'Manager is on vacation'

  constructor() { }

  ngOnInit() {
    this.happy ='awesome';
  }

  makeHappier (){
    this.happy ='manager is fired';
  }
}
