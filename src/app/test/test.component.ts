import { Component, OnInit,  } from '@angular/core';
import * as d3 from 'd3';
import { hierarchy, tree, treemap } from 'd3-hierarchy'
// import { AngularD3TreeLibModule } from 'angular-d3-tree';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
   
  constructor() { }


  ngOnInit() {
 this.createChart();
  }

  createChart():void{ 
    var pubs =
    {
      "name": "AUT-1",
      "children": [
          {
              "name": "PUB-1","children": [
                  {"name": "AUT-11","children": [
                      {"name": "AFF-111"},
                      {"name": "AFF-112"}
                  ]},
                  {"name": "AUT-12","children": [
                      {"name": "AFF-121"}
                  ]},
                  {"name": "AUT-13","children": [
                      {"name": "AFF-131"},
                      {"name": "AFF-132"}
                  ]},
                  {"name": "AUT-14","children": [
                      {"name": "AFF-141"}
                  ]}
              ]
          },
          {
              "name": "PUB-2","children": [
                  {"name": "AUT-21"},
                  {"name": "AUT-22"},
                
                  {"name": "AUT-28","children":[
                      {"name": "AFF-281"},
                      {"name": "AFF-282"},
                      {"name": "AFF-283"},
                      {"name": "AFF-284"},
                      {"name": "AFF-285"},
                      {"name": "AFF-286"}
                  ]}
              ]
          },
          {"name": "PUB-3"},
          {
              "name": "PUB-4","children": [
                  {"name": "AUT-41"},
                  {"name": "AUT-42"},
                  {"name": "AUT-43","children": [
                      {"name": "AFF-431"},
                      {"name": "AFF-432"},
                      {"name": "AFF-433"},
                      {"name": "AFF-434","children":[
                          {"name": "ADD-4341"},
                          {"name": "ADD-4342"},
                      ]}
                  ]},
                  {"name": "AUT-44"}
              ]
          },
          {
              "name": "PUB-5","children": [
                  {"name": "AUT-51","children":[
                      {"name": "AFF-511"},
                      {"name": "AFF-512"},
                      {"name": "AFF-513"},
                      {"name": "AFF-514"},
                      {"name": "AFF-515"},
                      {"name": "AFF-516"}
                  ]},
                  {"name": "AUT-52"},
                  {"name": "AUT-53"},
                  {"name": "AUT-54"},
                  {"name": "AUT-55","children":[
                      {"name": "AFF-551"},
                      {"name": "AFF-552"},
                      {"name": "AFF-553"},
                      {"name": "AFF-554"}
                  ]},
                  {"name": "AUT-56"},
                
                  {"name": "AUT-596"}
              ]
          },
          {
              "name": "PUB-6","children": [
                {"name": "AUT-61","children":[
                    {"name": "AFF-611"},
                    {"name": "AFF-612"},
                    {"name": "AFF-613"},
                    {"name": "AFF-614","children":[
                        {"name": "ADD-6141"},
                        {"name": "ADD-6142"},
                    ]}
                ]},
                {"name": "AUT-62"},
               
              ]
          }
      ]
  };; 

var diameter = 800,

// var margin = {top: 2, right: 120, bottom: 20, left: 120},
    width = 1200,
    height = 800;
    
var i = 0,
    duration = 350,
    root;

var tree = d3.tree()
    .size([360, diameter / 2 - 120])
    .separation(function(a, b) { return (a.parent  == b.parent ? 1 : 3) / a.depth; });

// var diagonal = d3.svg.diagonal.radial()
//     .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    var diagonal:any=  d3.linkRadial()
    .angle(function(d:any) { return  (d.x)  })
    .radius(function(d:any) { return d.y });


var svg = d3.select("body").append("svg")
    .attr("width", width )
    .attr("height", height )
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

root = pubs; 
root.x0 = height / 2;
root.y0 = 0;

root.children.forEach(collapse); // start with all children collapsed
update(root);

d3.select(self.frameElement).style("height", "800px");

function update(source) {
  const treeRoot = hierarchy(root)
  tree(treeRoot)
  // nodes
  var nodes = treeRoot.descendants()
  // links
 var  links = treeRoot.links()

  // Compute the new tree layout.

  // var nodes = tree.nodes(root),
  //     links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d:any) 
   { d.y = d.depth * 120; });

  // Update the nodes???
  var node = svg.selectAll("g.node")
      .data(nodes, function(d:any) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
       
      var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", 
      function(d:any) { return "rotate(" + (d.x ) + ")translate(" + (d.y )+ ")"; })
         .on('click', click);

nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 20)
      .style("fill", function(d:any) { return d.data._children ? "red" : "blue"; });

     
  nodeEnter.append("text")
      .attr("x", 10)
      .attr("dy", "1.35em")
      .attr("class", "font_size")
      .attr("text-anchor", "start")
      .attr("transform", function(d:any) { 
        return d.x < 180 ? "translate(5)" : "rotate(180)translate(-" + (d.data.name.length * 10)  + ")"; })
      .text(function(d:any) { return d.data.name; });
    //   .style("fill", "black");

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d:any) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

  nodeUpdate.select("circle")
      .attr("r", 10)
      .style("fill", function(d:any) { return d.data_children ? "yellow" : "black"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1)
      .attr("transform", function(d:any) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50)  + ")"; });

  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
      .duration(duration)
    //   .attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
      .remove();
      nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

   // Update the links???
   var link = svg.selectAll("path.link")
   .data(links, function(d:any) { return d.target.id; });

// Enter any new links at the parent's previous position.
link.enter().insert("path", "g")
   .attr("class", "link")
   .attr("d", function(d) {
     var o = {x: source.x0, y: source.y0};
    
     return diagonal({source: o, target: o});
   });

// Transition links to their new position.
link.transition()
   .duration(duration)
   .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    
    return diagonal({source: o, target: o});
  });

// Transition exiting nodes to the parent's new position.
link.exit().transition()
   .duration(duration)
   .attr("d", function(d) {
     var o = {x: source.x, y: source.y};
     return diagonal({source: o, target: o});
   })
   .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d:any) {
      
    d.x0 = d.x;
    d.y0 = d.y;
  });

}

function click(d) {
    

    if (d.data._children) {
      d.data.children = d.data._children;
      d.data._children = null;
    } else {
      d.data._children = d.data.children;
      d.data.children = null;
    }
    
    update(d);
  }
  
  // Collapse nodes
  function collapse(d) {
      
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
  
 }
 
}

}