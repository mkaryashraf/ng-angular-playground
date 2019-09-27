import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars=['ford', 'chevorlete', 'porche'];

  myData(){
    return 'this is my data!';
  }
}
