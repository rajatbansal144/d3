import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { HalfPieEntity } from '../model/halfPie-entity';
import { HalfDonutComponent } from '../half-donut/half-donut.component';

@Component({
  selector: 'app-half-donut-position',
  templateUrl: './half-donut-position.component.html',
  styleUrls: ['./half-donut-position.component.css']
})
export class HalfDonutPositionComponent implements OnInit {

  constructor() { }
@Input() halfDonutInputData: HalfPieEntity[];
@ViewChild(HalfDonutComponent) vc3:HalfDonutComponent;
 
  ngOnInit() {
  }


    parentFun(data:HalfPieEntity[]) {
console.log (this.halfDonutInputData)
      this.vc3.mymethod(data);
    }
    
    mymethod(data:HalfPieEntity[]) {
  // if(data.length ==0){
  //   this.emptyPie= false}
  // else{
    // this.emptyPie=true;
      // this.create Donut();
      this.parentFun(data);
    }
      
  }
  