import { Component, OnInit, Input } from '@angular/core';

import * as d3 from 'd3';
import { DashboardGraphService } from '../dashboard-graph.service';
import { donutdata } from '../model/donutdata';
import {DonutEntity} from '../model/donut-entity';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @Input()  donutInputData: DonutEntity[];
  @Input() id: string;
  @Input() centerValue: string;
  constructor(private service: DashboardGraphService) { }
  
  // data2 = JSON.stringify(this.data1)
  ngOnInit() {
    //this.createDonut(null);
    
  }
  ngAfterViewInit()
  { console.log("yyyyyyyyyyyyyyyyyyyyyy");
  console.log(this.donutInputData);
    this.createDonut(null);

  }

  mymethod(data:DonutEntity[],value:string) {
    this.centerValue=value;
     this.createDonut(data);
  }

  createDonut(inputData) {

    // debugger;
    let data= [];
    data = [];
    if (inputData == null) {
      data = this.donutInputData;
    }
    else {
      data = inputData;
    }
    console.log("Data*********");
    console.log(data);
    var totalCount = this.centerValue;//(data[0].count/100).toFixed(1);		//calcuting total manually

    var width = 100,
      height = 70,
      radius = 45;

    var arc: any = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(20);

    var pie = d3.pie()
      .sort(null)
      .value(function (d: any) {
        return d.count;
      });
      if(document.getElementById(this.id)!=undefined || document.getElementById(this.id)!=null)
      {
      document.getElementById(this.id).innerHTML="";
      }
      console.log("RRRRRRRRRRRr");
    
    var svg = d3.select('#'+this.id).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + 50 / 1 + "," + (35 / 1) + ")");
      console.log(svg);
    var g = svg.selectAll(".arc"+this.id)
      .data(pie(data))
      .enter().append("g");

    g.append("path")
      .attr("d", arc)
      .style("fill", function (d: any, i) {
        return d.data.color;
      });

    g.append("text")
      .attr("transform", function (d: any) {
        var _d = arc.centroid(d);
        _d[0] *= 1.5;	//multiply by a constant factor
        _d[1] *= 1.5;	//multiply by a constant factor
        return "translate(" + _d + ")";
      })
    // .attr("dy", ".50em")
    // .style("text-anchor", "middle")
    // .text(function(d:any) {
    //   if(d.data.percentage < 8) {
    //     return '';
    //   }
    //   return d.data.percentage + '%';
    // });

    g.append("text")
      .attr("class", "clsValue")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.3em')
      .attr('y', 9)
      .text(totalCount);

  }
  assign(dt)
  {
    
    document.getElementsByClassName("clsValue")[0].innerHTML=dt;
    document.getElementsByClassName("clsValue")[1].innerHTML=dt;
  }
}
