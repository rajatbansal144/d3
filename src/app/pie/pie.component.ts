import { Component, OnInit,Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }
  @Input() pieInputdata: [] ;  
  
  ngOnInit() {
  this.createChart(null)
  }
  mymethod(data) {

    // this.create Donut();
    // this.assign(data);
    this.createChart(data);
  }

  createChart(inputdata){
    let data=[];
    console.log(inputdata)
    if(inputdata==null)
    {
    data=this.pieInputdata;
    }
     
    else{
      data=inputdata;
    }
    // var data:any = this.pieInputdata;
    var totalCount = 2;		//calcuting total manually
    
    var width = 440,
    height = 170,
    radius = 75;
    if(document.getElementById("chartpie")!=undefined || document.getElementById("chartpie")!=null)
      {
      document.getElementById("chartpie").innerHTML="";
      }    var arc:any = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0 );
  
    var pie = d3.pie()
      .sort(null)
      .value(function(d:any) {
          return d.count;
      });
  
    var svg = d3.select('#chartpie').append("svg")
      .attr("width", '100%')
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
    var g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")  
  
//       .on("mouseover", function (d:any) {
//         g.append("text")
//         .attr("transform", function(d:any) {
//           console.log(d);
//           var _d = arc.centroid(d);
//           _d[0] *= 1.5;	//multiply by a constant factor
//           _d[1] *= 1.5;	//multiply by a constant factor
//           return "translate(" + _d + ")";
//         })
//             .style("opacity", 1)
//             .attr("fill","black")
//             .text(d.data.name);
//     })
//   .on("mouseout", function () {
//   // Hide the tooltip
//   g.append("text").remove()
//       .style("opacity", 0);;
// });

 


// var tooltip = g                              // NEW
//           .append('div')                                                // NEW
//           .attr('class', 'tooltip');                                    // NEW
                      
//         tooltip.append('div')                                           // NEW
//           .attr('class', 'label')
//           .attr('fill', 'black')
//           .attr('z-index', '20');                                      // NEW
             
       
//                                    // NEW

//         // d3.csv('weekdays.csv', function(error, dataset) {
//         //   dataset.forEach(function(d) {
//         //     d.count = +d.count;
//         //   });

         

//           g.on('mouseover', function(d:any) {                            // NEW
//                                             console.log(d);   
//                                             g.append("div")
//                                             .attr('fill', 'black')
//                                             .attr('z-index', '20');                     // NEW
//             // var percent = Math.round(1000 * d.data.count / total) / 10; // NEW
//             tooltip.select('.label').html(d.data.name);                // NEW
//                         // NEW
//             tooltip.style('display', 'block');                          // NEW
//           });                                                           // NEW
          
//           g.on('mouseout', function() {                              // NEW
//             tooltip.style('display', 'none');                           // NEW
//           });                                                           // NEW



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
      .attr("dy", ".50em")
      .attr("fill", "white")
      .style("text-anchor", "middle")
      .style("font-size", "8px")
      .text(function(d:any) {
        
        return d.data.count ;
      });

      g.append("text")
      .attr("transform", function(d:any) {
       
        var _d = arc.centroid(d);
        _d[0] *=3.95;	//multiply by a constant factor
        _d[1] *= 2.45;	//multiply by a constant factor
        return "translate(" + _d + ")";
      })
      .attr("dy", ".1em")
      // .attr("dx", "1em")
      .attr("class", "label")
     
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .text(function(d:any) {
        
        return d.data.name ;
      });



  //     g.append('tspan')
  // .attr('y', '-0.6em')
  // .attr('x', 0)
  // .style('font-weight', 'bold')
  // .text(d => `{d.data.name}`);
        
    // g.append("text")
    //  .attr("text-anchor", "middle")
    //  .attr('font-size', '1em')
    //  .attr('y', 10)
    //  .text(totalCount);
  
  
  }

}
