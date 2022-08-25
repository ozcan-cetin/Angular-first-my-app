import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
// count:number=0
// @Input() count:number=0

@Output() PersonelEvent=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

// arttir(){
//   this.count+=1
// }

addpersonel(name:string):void{
this.PersonelEvent.emit(name);
}

isOpen:boolean = true;
changeColor():void{
  this.isOpen=!this.isOpen
}
}
