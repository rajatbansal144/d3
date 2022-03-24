import { Component, OnInit, ViewChild,Input } from '@angular/core';
import {DonutComponent} from '../donut/donut.component';
import {DonutEntity} from '../model/donut-entity';
import {SpEntity} from '../model/sp-entity';

@Component({
  selector: 'app-donut-position',
  templateUrl: './donut-position.component.html',
  styleUrls: ['./donut-position.component.css']
})
export class DonutPositionComponent implements OnInit {

  constructor() { }
  @Input() donutInputData: SpEntity 
  
  
  @ViewChild('ch1') vc:DonutComponent;
  @ViewChild('ch2') vc2:DonutComponent;
 
  ngOnInit() {
  // debugger;
  console.log("jjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkk");
  console.log(this.donutInputData);
  }
  parentFun(data:SpEntity) {
    this.donutInputData=data;
    this.vc.mymethod(data.firstDonutData,data.spiIndex);
    this.vc2.mymethod(data.secondDonutData,data.indexValue);
  }
  mymethod(data) {
     this.parentFun(data);
  }
}
