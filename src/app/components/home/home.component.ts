import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // users:string[] = []
  users:{ name: string; age:number}[] | undefined ;
  // age: {name: string, age:number}[] | undefined;

  constructor() {}

  ngOnInit(): void {
    // this.users = ['ali', 'veli', 'deli'];

    this.users = [
      {
        name:'veli',
        age:10
      },
      {
        name:'ali',
        age:6
      },
      {
        name:'ömer',
        age:7
      }
    ]

  }
}
