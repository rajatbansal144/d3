import { Component, Input, OnInit } from '@angular/core';
import { ThreeDivEntity } from '../model/threeDiv-entity';

@Component({
  selector: 'app-three-div-graph',
  templateUrl: './three-div-graph.component.html',
  styleUrls: ['./three-div-graph.component.css']
})
export class ThreeDivGraphComponent implements OnInit {

  constructor() { }
  @Input()threeDivInputData: ThreeDivEntity[]

  ngOnInit() {
  }

}
