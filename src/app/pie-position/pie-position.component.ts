import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { PieEntity } from '../model/pie-entity';
import { PieComponent } from '../pie/pie.component';

@Component({
  selector: 'app-pie-position',
  templateUrl: './pie-position.component.html',
  styleUrls: ['./pie-position.component.css']
})
export class PiePositionComponent implements OnInit {

  constructor() { }
 emptyPie=true
  @Input() pieInputdata: PieEntity[] ; 
  @ViewChild(PieComponent) vc:PieComponent; 
  ngOnInit() {
  }

  parentFun(data:PieEntity[]) {

    this.vc.mymethod(data);
  }
  
  mymethod(data:PieEntity[]) {
if(data.length ==0){
  this.emptyPie= false}
else{
  this.emptyPie=true;
    // this.create Donut();
    this.parentFun(data);
  }
}}
