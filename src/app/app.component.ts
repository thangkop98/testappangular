import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title = 'testapp';

  data:any;

  object:{name: string, phone: number} = {name: 'abc', phone: 123}

  array:number[] = [1,2,3];

  today:any = new Date();


 
  
}
