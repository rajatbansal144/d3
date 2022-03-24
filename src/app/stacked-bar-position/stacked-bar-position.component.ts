import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StackedBarEntity } from '../model/stackedBar-entity';
import { StackedBarComponent } from '../stacked-bar/stacked-bar.component';

@Component({
  selector: 'app-stacked-bar-position',
  templateUrl: './stacked-bar-position.component.html',
  styleUrls: ['./stacked-bar-position.component.css']
})
export class StackedBarPositionComponent implements OnInit {

  constructor() { }
@Input()stackedBarInputData:StackedBarEntity[];
@ViewChild(StackedBarComponent) vc:StackedBarComponent; 
ngOnInit() {
}

parentFun(data:StackedBarEntity[]) {

  this.vc.mymethod(data);
}
stackedBarEmpty=true
mymethod(data:StackedBarEntity[]) {

  if(data.length ==0){
    this.stackedBarEmpty= false}
  else{
    this.stackedBarEmpty=true;
      // this.create Donut();
      this.parentFun(data);
    }
}}
