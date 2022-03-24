import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-donut2',
  templateUrl: './donut2.component.html',
  styleUrls: ['./donut2.component.css']
})
export class Donut2Component implements OnInit {

  constructor() { }


  ngOnInit() {
    this.createDonut();
  }
createDonut(){
  var data:any = [
    {name: 'cats', count: 10, percentage: 50, color: '#92D050'},
    {name: 'dogs', count: 1, percentage: 50, color: '#E27F68'},
    // {name: 'horses', count: 17, percentage: 15, color: '#6149c6'},
    // {name: 'goats', count: 47, percentage: 41, color: '#9f8170'},
    // {name: 'cows', count: 35, percentage: 31, color: '#8ABD4A'},
  ];
  var totalCount = 2;		//calcuting total manually
  
  var width = 100,
  height = 80,
  radius = 50;

  var arc:any = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(25 );

  var pie = d3.pie()
    .sort(null)
    .value(function(d:any) {
        return d.count;
    });

  var svg = d3.select('#donut2').append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    console.log("GGG");
    console.log(svg);

  var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g");    

   g.append("path")
    .attr("d", arc)
    .style("fill", function(d:any,i) {
      return d.data.color;
    });

  g.append("text")
    .attr("transform", function(d:any) {
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
   .attr("text-anchor", "middle")
   .attr('font-size', '1.3em')
   .attr('y', 9)
   .text(totalCount);

}
}
