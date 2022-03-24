import { Component, OnInit, Input } from "@angular/core";
import * as d3 from "d3";
import { GroupedBarEntity } from '../model/groupedBar-entity';

@Component({
  selector: 'app-grouped-bar',
  templateUrl: './grouped-bar.component.html',
  styleUrls: ['./grouped-bar.component.css']
})
export class GroupedBarComponent implements OnInit {
@Input()groupedBarInputData:[]
  constructor() { }

  ngOnInit() {
    this.createChart(null);
  
  }
  mymethod(data) {

    // this.create Donut();
    // this.assign(data);
    this.createChart(data);
  }

  createChart(inputdata){
    let models=[];
    console.log(inputdata)
    if(inputdata==null)
    {
      models=this.groupedBarInputData;
    }
     
    else{
      models=inputdata;
    }
models = models.map(i => {
  i.model_name = i.model_name;
	return i;
});

var container = d3.select('#d3id'),
    width = 400,
    height = 70,
    margin = {top: 4, right: 20, bottom: 40, left: 90},
    barPadding = .3,
    axisTicks = {qty: 1, outerSize: 0, dateFormat: '%m-%d'};
    if(document.getElementById("d3id")!=undefined || document.getElementById("d3id")!=null)
    {
    document.getElementById("d3id").innerHTML="";
    }
var svg = container
   .append("svg")
   .attr("width", width)
   .attr("height", height)
   .append("g")
   .attr("transform", `translate(${margin.left},${margin.top})`);

var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
var xScale1 = d3.scaleBand();
var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

xScale0.domain(models.map(d => d.model_name));
xScale1.domain(['field1', 'field2']).range([0, xScale0.bandwidth()]);
yScale.domain([0, d3.max(models, d => d.field1 > d.field2 ? d.field1 : d.field2)]);

var model_name = svg.selectAll(".model_name")
  .data(models)
  .enter().append("g")
  .attr("class", "model_name")
  .attr("transform", d => `translate(${xScale0(d.model_name)},0)`);

/* Add field1 bars */
model_name.selectAll(".bar.field1")
  .data(d => [d])
  .enter()
  .append("rect")
  .attr("class", "bar field1")
.style("fill","#83389B")
  .attr("x", d => xScale1('field1'))
  .attr("y", d => yScale(d.field1))
  .attr("width", xScale1.bandwidth())
  .attr("height", d => {
    return height - margin.top - margin.bottom - yScale(d.field1)
  });
  
/* Add field2 bars */
model_name.selectAll(".bar.field2")
  .data(d => [d])
  .enter()
  .append("rect")
  .attr("class", "bar field2")
.style("fill","#0063BE")
  .attr("x", d => xScale1('field2'))
  .attr("y", d => yScale(d.field2))
  .attr("width", xScale1.bandwidth())
  .attr("height", d => {
    return height - margin.top - margin.bottom - yScale(d.field2)
  });
 
// Add the X Axis
svg.append("g")
   .attr("class", "x axis")
   .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
   .call(xAxis);

// Add the Y Axis
svg.append("g")
   .attr("class", "y axis")
   .call(yAxis); 

   svg.append("circle").attr("cx",130).attr("cy",60).attr("r", 6).style("fill", "#83389B")
svg.append("circle").attr("cx",0).attr("cy",60).attr("r", 6).style("fill", "#0063BE")
svg.append("text").attr("x", 140).attr("y", 60).text("Planned Hours").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 10).attr("y", 60).text("Worked hours").style("font-size", "15px").attr("alignment-baseline","middle")
}


}
