import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-gauge1',
  templateUrl: './gauge1.component.html',
  styleUrls: ['./gauge1.component.css']
})
export class Gauge1Component implements OnInit {
  gaugemap:any = {};
  constructor() { }
    ngOnInit() {
    this.draw();
  }

  draw() {
     var self = this;
    var gauge = function (container, configuration) {
    
      var config:any = {
        size: 515,
        clipWidth: 100,
        clipHeight: 70,
        ringInset: 20,
        ringWidth: 20,

        pointerWidth: 7,
        pointerTailLength: 2,
        pointerHeadLengthPercent: 0.7,

        minValue: 0,
        maxValue: 10,

        minAngle: -90,
        maxAngle: 90,

        transitionMs: 750,

        majorTicks: 5,
        labelFormat: d3.format('d'),
        labelInset: 10,

        arcColorFn: d3.interpolateHsl(d3.rgb('#e8e2ca'), d3.rgb('#3e6c0a'))
      };
      var range = undefined;
      var r = undefined;
      var pointerHeadLength = undefined;
      var value = 0;

      var svg = undefined;
      var arc = undefined;
      var scale = undefined;
      var ticks = undefined;
      var tickData = undefined;
      var pointer = undefined;

      var donut = d3.pie();

      function deg2rad(deg) {
        return deg * Math.PI / 180;
      }

      function newAngle(d) {
        var ratio = scale(d);
        var newAngle = config.minAngle + (ratio * range);
        return newAngle;
      }

      function configure(configuration) {
        var prop = undefined;
        for (prop in configuration) {
          config[prop] = configuration[prop];
        }

        range = config.maxAngle - config.minAngle;
        r = config.size / 2;
        pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);

        // a linear scale this.gaugemap maps domain values to a percent from 0..1
        scale = d3.scaleLinear()
          .range([0, 1])
          .domain([config.minValue, config.maxValue]);

        ticks = scale.ticks(config.majorTicks);
        tickData = d3.range(config.majorTicks).map(function () { return 1 / config.majorTicks; });

        arc = d3.arc()
          .innerRadius(r - 2 - config.ringInset)
          .outerRadius(r - config.ringInset)
          .startAngle(function (d:any, i) {
            var ratio = d * i;
            return deg2rad(config.minAngle + (ratio * range));
          })
          .endAngle(function (d:any, i) {
            var ratio = d * (i + 1);
            return deg2rad(config.minAngle + (ratio * range));
          });
      }
      self.gaugemap.configure = configure;

      function centerTranslation() {
        return 'translate(' + r + ',' + 30 + ')';
      }

      function isRendered() {
        return (svg !== undefined);
      }
      self.gaugemap.isRendered = isRendered;

      function render(newValue) {
        svg = d3.select(container)
          .append('svg:svg')
          .attr('class', 'gauge')
          .attr('width', config.clipWidth)
          .attr('height', config.clipHeight);

        var centerTx = centerTranslation();

        var arcs = svg.append('g')
          .attr('class', 'arc')
          .attr("y","0")
          .attr('transform', centerTx);

        arcs.selectAll('path')
          .data(tickData)
          .enter().append('path')
          .attr('fill', '#92d050')
          .attr('d', arc)
          .attr("y","2");


        var lg = svg.append('g')
          .attr('class', 'label')
          .attr('transform', centerTx);


        lg.selectAll('text')
          .data(ticks)
          .enter().append('text')
          .attr("font-size","0.8rem")
          .attr("font-weight","750")
          .attr("fill","#92d050")          
          .attr("dy", "13")
          .attr("dx", "-7")
          .text(target+'%');

          // actualText = chart.append('text')
          //        .attr('id', "Value")
          //            .attr("font-size", 16)
          //            .attr("text-anchor", "middle")
          //            .attr("dy", ".5em")
          //            .style("fill", '#0000FF')
          //            .attr('class', 'needle').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
  


          var lg = svg.append('g')
          .attr('class', 'label')
          .attr('transform', centerTx);
      lg.selectAll('text')
          .data(ticks)
        .enter().append('text')
     
          .attr('transform', function(d) {
           
            var ratio = scale(d);
            var newAngle = config.minAngle + (ratio * range);
            return 'rotate(' +newAngle +') translate(-1.5,' +(config.labelInset - 34) +')';
          })
          .attr('font-size','7px')
          .attr('fill','#92d050')
          .text('|');

        var lineData = [[config.pointerWidth / 2, 0],
        [0, -pointerHeadLength],
        [-(config.pointerWidth / 2), 0],
        [0, config.pointerTailLength],
        [config.pointerWidth / 2, 0]];
        var pointerLine = d3.line().curve(d3.curveLinear)
        var pg = svg.append('g').data([lineData])
          .attr('class', 'pointer')
          .style('fill','none')
          .style('stroke','#92d050')
          .attr('transform', centerTx);

        pointer = pg.append('path')
          .attr('d', pointerLine/*function(d) { return pointerLine(d) +'Z';}*/)
          .attr('transform', 'rotate(' + config.minAngle + ')');

        update(newValue === undefined ? 0 : newValue);
      }
      self.gaugemap.render = render;
      function update(newValue, newConfiguration?) {
        if (newConfiguration !== undefined) {
          configure(newConfiguration);
        }
        var ratio = scale(newValue);
        var newAngle = config.minAngle + (ratio * range);
        pointer.transition()
          .duration(config.transitionMs)
          .ease(d3.easeElastic)
          .attr('transform', 'rotate(' + newAngle + ')');
      }
      self.gaugemap.update = update;

      configure(configuration);

      return self.gaugemap;
    };
  
    var powerGauge:any = gauge('#power-gauge', {
      size: 100,
      clipWidth: 100,
      clipHeight: 45,
      ringWidth: 60,
      maxValue: 100,
      transitionMs: 4000,
    });
    var target:number=75;
    powerGauge.render(target);


     

    

    
  }

}