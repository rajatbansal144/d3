import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { StackedBarEntity } from '../model/stackedBar-entity';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.css']
})
export class StackedBarComponent implements OnInit {
@Input()stackedBarInputData:StackedBarEntity[];
  constructor() { }

  ngOnInit() {
    // this.createChart()
    // console.log(this.stackedBarInputData)
  }
  ngAfterViewInit()
  {
    this.createChart(null);

  }
  mymethod(data) {

    // this.create Donut();
    // this.assign(data);
    this.createChart(data);
  }
    createChart(inputdata){
      console.log(this.stackedBarInputData)
      let data=[];
      console.log(inputdata)
      if(inputdata==null)
      {
        data=this.stackedBarInputData;
      }
       
      else{
        data=inputdata;
      }
   
// createChart(){
  if(document.getElementById("stacked-bar")!=undefined || document.getElementById("stacked-bar")!=null)
{
document.getElementById("stacked-bar").innerHTML="";
} 
  var initStackedBarChart = {
    draw: function(config) {
    var  me = this,
      domEle = config.element,
      stackKey = config.key,
      data = config.data,
      // margin = {top: 20, right: 20, bottom: 30, left: 50},
      // parseDate = d3.timeParse("%m/%Y"),  
      width = 300 ,
      height = 50,
      xScale = d3.scaleLinear().rangeRound([0, width]),
      yScale = d3.scaleBand().rangeRound([height, 0]).padding(0.1),
      color = d3.scaleOrdinal(d3.schemeCategory10),
      // xAxis = d3.axisBottom(xScale),
      // yAxis =  d3.axisLeft(yScale).tickFormat(d3.timeFormat("%b")),
      
      svg = d3.select("#"+domEle).append("svg")
          .attr("width", "100%")
          .attr("height", height )
          .append("g")
          .attr("transform", "translate(" +width/8 + "," + height/2 + ")");
  
      var stack = d3.stack()
        .keys(stackKey)
        /*.order(d3.stackOrder)*/
        .offset(d3.stackOffsetNone);

      var layers= stack(data);
        data.sort(function(a, b) { return b.total - a.total; });
        // yScale.domain(data.map(function(d) { return parseDate(d.date); }));
        xScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();
  
      var layer = svg.selectAll(".layer")
        .data(layers)
        .enter().append("g")
        .attr("class", "layer")
        .style("fill", function(d, i:any) { return color(i); });
  
        layer.append("text")
        .style("fill","black")
        .text(function(keys:any) { return keys.value;});			

        // svg.append("text")
        // .attr("class","text")
        // // .attr("x", function (keys) {
        // //     return xScale(d.y0); // could use an offset here as well...
        // // })
        // .attr("y", 70) // just added 20 as an offset...for demo purposes
        // .text(function(keys:any) { return keys;});		
        
        
        layer.selectAll("rect")
          .data(function(d) { return d; })
        .enter().append("rect")
          .attr("y", "-21")
          .attr("x", function(d) { return xScale(d[0]); })
          .attr("height", "25")
          .attr("width", function(d) { return xScale(d[1]) - xScale(d[0]) });
  
        // svg.append("g")
        // .attr("class", "axis axis--x")
        // .attr("transform", "translate(0," + (height+5) + ")")
        // .call(xAxis);
  
        // svg.append("g")
        // .attr("class", "axis axis--y")
        // .attr("transform", "translate(0,0)")
        // .call(yAxis);	

        layer.append("text")
        .style("fill","white")
        .attr("text-align", "center")
        
     .attr('font-size', '1em')
    //  .attr("x", function(d:any) { return xScale(d[0]); })
          // .attr("height", yScale.bandwidth())
      //     .attr("x", function(d:any, i) {console.log(d);
      //       return d[0][0];
      //  })
      .attr("x", function(d:any) { return xScale(d[0][0]); })
        
       .attr("y", function(d) {
            return(0)})
         .text(function(d:any) { return ((d[0][1])-(d[0][0]));});			





         layer.append("text")
         .style("fill","black")
         .attr("text-align", "center")
         
      .attr('font-size', '0.8em')
      .attr("x", function(d:any) { return xScale(d[0]); })
           .attr("height", yScale.bandwidth())
       //     .attr("x", function(d:any, i) {console.log(d);
       //       return d[0][0];
       //  })
       .attr("x", function(d:any) { return xScale(d[0][0]); })
        
        .attr("y", function(d) {
             return(18)})
          .text(function(d:any) { return ((d.key));});			
 
 

    //     arcs.append("svg:text")                                     //add a label to each slice
    //     .attr("fill", "#fff")
    //     .attr('font-size', '0.6em')
    //     .attr("transform", function(d:any) {                    //set the label's origin to the center of the arc
    //     //we have to make sure to set these before calling arc.centroid
    //     d.innerRadius = 50 ;
    //     d.outerRadius = 150;
    //     return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
    // })
    // .attr("text-anchor", "middle")                          //center the text on it's origin
    // .text(function(d, i) { return data[i].value; });      //get the label from our original data array
   
    }
  }
  // var data = this.stackedBarInputData;
  var key = ["High", "Mid", "Low"];
  initStackedBarChart.draw({
    data: data,
    key: key,
    element: 'stacked-bar'
  });
}
}
