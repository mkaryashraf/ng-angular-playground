import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*template:`
  <h1>hey there</h1>
  <p>I am fine {{myObj.name}}</p>
  `,*/
  template:
  `<h1>hey there</h1>
  <img src = {{angularLogo}}>
  <img [src] = "angularLogo">
  <img bind-src ="angularLogo">
  `
  /*`
  <h1>hey there</h1>
 <ul>
     <li *ngIf="!myArr;else myothertemp">yeah I exist!</li>
  </ul>
  <ng-template #myothertemp> hopa lala</ng-template>
  `*/,
  //templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'ng-angular-playground';
//myArr= 'nothing';
angularLogo="https://angular.io/resources/images/logos/angular2/angular.png";
}
