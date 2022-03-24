import { Component, OnInit,Input } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-half-donut',
  templateUrl: './half-donut.component.html',
  styleUrls: ['./half-donut.component.css']
})
export class HalfDonutComponent implements OnInit {

  constructor() { }
  @Input() halfDonutInputData: [];
  ngOnInit() {
    // this.createChart(null)
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
      let data=[];
      console.log(inputdata)
      if(inputdata==null)
      {
        data=this.halfDonutInputData;
      }
       
      else{
        data=inputdata;
      }
    var width = 140;
var height = 70; //this is the double because are showing just the half of the pie
var radius = 70; 
if(document.getElementById("chart")!=undefined || document.getElementById("chart")!=null)
{
document.getElementById("chart").innerHTML="";
} 
var arc:any = d3.arc()              //this will create <path> elements for us using arc data
.innerRadius(40)
 .outerRadius(radius);

//array of colors for the pie (in the same order as the dataset)
// var color = d3.scaleOrdinal()
//   .range(['#E27F68', '#D5CFC8']);
 
  // var  data = [
  //   				{ label: 'CDU', value: 1924, color:'#E27F68' },
  //           { label: 'SPD', value: 650,color:'#D5CFC8' },
  //             ];
    
    var vis = d3.select("#chart")
                .append("svg")              //create the SVG element inside the <body>
                .data([data])                   //associate our data with the document
                .attr("width", width)           //set the width and height of our visualization (these will be attributes of the <svg> tag
                .attr("height", height)
                .append("svg:g")                //make a group to hold our pie chart
                .attr('transform', 'translate(' + (width /2) +  ',' +2* (height / 2) + ')');    //move the center of the pie chart from 0, 0 to radius, radius
 
   
 
    var pie:any = d3.pie()           //this will create arc data for us given a list of values
                .startAngle(-90 * (Math.PI/180))
                .endAngle(90 * (Math.PI/180))
                .padAngle(0 ) // some space between slices
  	        	  .sort(null) //No! we don't want to order it by size
                .value(function(d:any) { return d.value; });    //we must tell it out to access the value of each element in our data array
 
    var arcs :any= vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
                    .data(pie)  //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
       					 .enter()   //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            		.append("svg:g")  //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)
 
        arcs.append("svg:path")
                .attr("fill", function(d:any, i:any) { return   d.data.color; } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function
 
        arcs.append("svg:text")                                     //add a label to each slice
                .attr("fill", "#fff")
                .attr('font-size', '0.8em')
                .attr("transform", function(d:any) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 50 ;
                d.outerRadius = 150;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return data[i].count; });      //get the label from our original data array
           
  //           vis.append("text")
  //           .attr("text-anchor", "middle")
  //           .attr('font-size', '1em')
  //           .attr('y',-5)
  //           .text("20");
   }

}
