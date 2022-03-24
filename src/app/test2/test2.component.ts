import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as d3 from 'd3';
import { DashboardGraphService } from '../dashboard-graph.service';

import { hierarchy, tree, treemap } from 'd3-hierarchy'
//import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';
// import { AngularD3TreeLibModule } from 'angular-d3-tree';
import { NodeEntity } from '../model/node-entity';
import { Circle } from '../model/circle';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  constructor(private service: DashboardGraphService) { }

  @Output("selectNode") selectNode: EventEmitter<any> = new EventEmitter<any>();
  @Input() nodes: NodeEntity[];

  ngOnInit() {
    this.createChart();
  }

  createChart(): void {



    const width = 900,
      height = 1000;

    let i = 0;

    const root = d3.hierarchy(this.nodes);
    const transform = d3.zoomIdentity;
    let node, link;

    const svg = d3
      .select("#force")
      .append("svg")
      .call(
        d3
          .zoom()
          .scaleExtent([1 / 2, 8])
          .on("zoom", zoomed)
      )
      .attr("width", '65vw')
      .attr("height", '85vh')
      .append("g")

      .attr("transform", "translate(200,20)");

    const simulation: any = d3
      .forceSimulation()
      .force(
        "link",
        d3.forceLink().id(function (d: any) {
          return d.id;
        })
      )
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength(-15)
          .distanceMax(50)
      )
      .force("center", d3.forceCenter(width / 3, height / 4))
      .on("tick", ticked)
      .force(
        "collide",
        d3
          .forceCollide()
          .strength(0.05)
          .radius(60)
          .iterations(1)
      );

    if (root.children != undefined && root.children != null) {
      root.children.forEach(collapse);
    }



    function update() {
      const nodes = flatten(root);
      const links: any = root.links();

      link = svg.selectAll(".link").data(links, function (d: any) {
        return d.target.id;
      });

      link.exit().remove();

      const linkEnter = link
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "#CCCCCC")
        .style("opacity", "1")
        .style("stroke-width", 2);

      link = linkEnter.merge(link);

      node = svg.selectAll(".node").data(nodes, function (d: any) {
        return d.id;
      });

      node.exit().remove();

      const nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        // .attr("stroke", "black") //666
        .attr("stroke-width", 3)
        .style("fill", color)
        .style("opacity", 1).style("cursor","pointer")

        .on("click", clicked)
        // .on("click", click)
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );


      nodeEnter.append("circle").attr("r", 25).style("opacity", 1).attr("nodeId", function (d: any) {
        return d.data.id;
      }).attr("id", function (d: any) {

        if (d.data.isRoot) {
          return "root";
        }
        
      }).style("cursor", "pointer");
      



      nodeEnter
        .append("text")
        .style("stroke", "black")
        .attr("stroke-width", 0)
        .attr("fill", "black")
        .style("font-weight", "normal")
        .attr("dy", "2.6em")
        .attr("width", '22px')
        .style("text-anchor", "middle")
        .style("font-size", "16px")
        .attr("class", "font_size")
        .attr("pk", "kp")
        // .attr("text-anchor", "start")
        .text(function (d: any) {
          return d.data.text;
        });

      node = nodeEnter.merge(node);
      simulation.nodes(nodes);
      simulation.force("link").links(links);
    }

    function sizeContain(num) {
      num = num > 1000 ? num / 1000 : num / 100;
      if (num < 4) num = 4;
      return num;
    }

    function color(d) {
      return d._children
        ? "#51A1DC" // collapsed package
        : d.children
          ? "#51A1DC" // expanded package
          : "#F94B4C"; // leaf node
    }

    function radius(d) {
      return d._children ? 10 : d.children ? 10 : 4;
    }

    function ticked() {

      if (link == undefined || link == null) {
        return;
      }

      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });

      node.attr("transform", function (d) {
        return `translate(${d.x}, ${d.y})`;
      });

    }
    function click(event: any) {

    }

    function docClick() {
      document.addEventListener("click", function () {


        var elements = document.getElementsByClassName("selected");

        for (var i = 0; i < elements.length; i++) {
          elements[i].setAttribute("style", "");
        }

      });
    }

    function clicked(d) {
      debugger;

      var elements = document.getElementsByClassName("selected");

      for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute("style", "");
      }


      if (!d3.event.defaultPrevented) {
        if (d.children) {

          d._children = d.children;
          d.children = null;

        } else {
          d3.select(this).select("circle").transition()
            .duration(750)
            // .attr("r", 40)
            .attr("class", "selected")
            .style("stroke", "green")
            .style("stroke-width", 50)
            .style("cursor", "pointer");
          d.children = d._children;
          d._children = null;
        }
        update();
      }
    }


    function collapse(d) {

      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    function flatten(root) {
      const nodes = [];
      function recurse(node) {
        if (node.children) node.children.forEach(recurse);
        if (!node.id) node.id = ++i;
        else ++i;
        nodes.push(node);
      }
      recurse(root);
      return nodes;
    }

    function zoomed() {
      svg.attr("transform", d3.event.transform);
    }

    update();
  
  document.getElementById("root").style.stroke="green";
  
  
  }

  emitValueToParent(value) {
    this.selectNode.emit(value);
  }
  onNodeSelection(event, j) {
    if (event.target.tagName == "circle") {
      this.emitValueToParent(event.target.getAttribute("nodeId"));
      if(event.target.getAttribute("id"))
      {
     
      }
      else
      {
        document.getElementById("root").style.stroke="transparent";
      }
    }
  }
}