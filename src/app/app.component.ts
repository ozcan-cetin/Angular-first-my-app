import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  // public parentcount:number=5
  // add(){
  //   this.parentcount+=1
  // }
  // dec(){
  //   if(this.parentcount>0)
  //   this.parentcount-=1
  // }

  AddPersonel(name:string):void
  {
    alert(name)
  }
}
