import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  /*template:`
  <h1>hey there</h1>
  <p>I am fine {{myObj.name}}</p>
  `,*/
//  template: '<h1>{{someProperty}}</h1>'

  /*`
  <!--<h1 [ngClass]="titleClassses">hey there</h1>
  <h1 [style.color]="titleStyle ?'green': 'pink' ">Hello!</h1>-->
  <h1 [ngStyle]="titleStyles">Hello!</h1>
  `*/
  /*`
  <h1 [class]="titleClass">hey there</h1>

  `*/
  /*`
  <h1>hey there</h1>
 <ul>
     <li *ngIf="!myArr;else myothertemp">yeah I exist!</li>
  </ul>
  <ng-template #myothertemp> hopa lala</ng-template>
  `,*/
  templateUrl:'./app.component.html',
  stylesUrl: ['./app.component.css']
  /*[
  `
.red-title{
  color:red;
}

h1{
  text-decoration:underline;
}
.ital{
  font-style: italic;
}

  `]*/
})
export class AppComponent {
//  title = 'ng-angular-playground';
//myArr= 'nothing';
//angularLogo="https://angular.io/resources/images/logos/angular2/angular.png";
/*titleClass=false;
titleClassses = {
  'red-title':true,
//  'h1':true,
  'ital':true
}

titleStyle = true;//"red";
titleStyles ={
  'color' : 'red',
  'font-size':'4em'

}*/
constructor( private dataService:DataService ){

}

someProperty:string ='';
ngOnInit(){
  console.log(this.dataService.cars);
  this.someProperty = this.dataService.myData();
}
}
