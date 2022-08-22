import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = "örnek proje";

  constructor() { }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle(){
    this.title = "asd";
  }

}
