import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardGraphService {

  constructor() { }
  data= [
    { count: 90,  color: 'yellow'},
    { count: 10,  color: '#D5CFC8'},
    { count: 10,  color: 'Red'},
    // {name: 'horses', count: 17, percentage: 15, color: '#6149c6'},
    // {name: 'goats', count: 47, percentage: 41, color: '#9f8170'},
    // {name: 'cows', count: 35, percentage: 31, color: '#8ABD4A'},
  ];

getdonut(){
 
let data = this.data;
return data;

}

setClickedNode(name){
let selectedName = name;

return(selectedName)
}
hello(){
  
}

}
