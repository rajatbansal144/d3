import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DonutComponent } from '../donut/donut.component';
import { DashboardGraphService } from '../dashboard-graph.service';
import { Hierarchy } from '../model/hierarchy';
import { NodeEntity } from '../model/node-entity';
import { DashboardService } from '../services/dashboard.service';
import { DonutPositionComponent } from '../donut-position/donut-position.component';
import {SpEntity} from '../model/sp-entity';
// this.menuItems=[];
// this.dashboardService.getDashboardMenuItems().subscribe((data: MenuItem[]) => this.menuItems = data);;
import { donutdata } from '../model/donutdata';
import { Circle } from '../model/circle';
import { MenuItem } from '../model/menu-item';
import { Task } from '../model/task';
import { DonutEntity } from '../model/donut-entity';
import {PieEntity } from '../model/pie-entity';
import { PiePositionComponent } from '../pie-position/pie-position.component';
import { Kpiheader } from '../model/kpiheader';
import { GroupedBarEntity } from '../model/groupedBar-entity';
import { GroupedBarComponent } from '../grouped-bar/grouped-bar.component';
import { HalfPieEntity } from '../model/halfPie-entity';
import { HalfDonutPositionComponent } from '../half-donut-position/half-donut-position.component';
import { gray } from 'd3';
import { StackedBarEntity } from '../model/stackedBar-entity';
import { StackedBarPositionComponent } from '../stacked-bar-position/stacked-bar-position.component';
import { ThreeDivEntity } from '../model/threeDiv-entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _gService: DashboardGraphService, private _dashboardService: DashboardService) { }

  // product=[{
  // "Code":123,
  //         "Name":"hgfdb",
  //         "Category":"dhhvjd",
  //         "Quantity":222
  // }]
  donutDataDb: donutdata[];
  dbNodes: Hierarchy[];

  nodes: NodeEntity[];
  note: string = "";

  dataPK: number = 0.83;
  tasks: Task[];
  selectedTasks: Task[];
  donutInputData: DonutEntity[];
  donutInputData2: DonutEntity[];
  spTotalTasks:number;
  spMissedTasks:number;
  spiIndex:string;
  spiIndexValue:string;
  spMainData:SpEntity;
  pietasks:PieEntity[]
  groupedBarTasks:GroupedBarEntity[]
 
  pieInputdata: PieEntity[];
  groupedBarInputData:GroupedBarEntity[];

  halfDonutInputData:HalfPieEntity[];
  halfPieTasks:HalfPieEntity[];

stackedBarInputData:StackedBarEntity[];
StackedBarTasks:StackedBarEntity[];


threeDivInputData:ThreeDivEntity[];
threeDivTasks: ThreeDivEntity[];

  @ViewChild(DonutPositionComponent) vc: DonutPositionComponent;
  @ViewChild(PiePositionComponent) vc1: PiePositionComponent;
  @ViewChild(GroupedBarComponent) vc2:GroupedBarComponent;
  @ViewChild(HalfDonutPositionComponent) vc3:HalfDonutPositionComponent;
  
  @ViewChild(StackedBarPositionComponent) vc4:StackedBarPositionComponent;

  ngOnInit() {
    // debugger;
    // this.donutDataDb = this._gService.getdonut();
    this.donutInputData = [];
    
    this.dbNodes = [];

    this._dashboardService.getNodes().subscribe((data: Hierarchy[]) => {
      
      this.dbNodes = data;
      this.nodes = this.getObjByParentId(0);

      this._dashboardService.getSchedulePerformanceData().
        subscribe((data: Task[]) => {
          // debugger;
          this.tasks = data;
          this.setDonutData(1, 1);

        });

        this._dashboardService.getCurrentProgress().
    subscribe((data: PieEntity[]) => {
      
      this.pietasks = data;
      this.setPieData(1, 1);

    });

    });
    this._dashboardService.getDashboardGraphHeader().
    subscribe((data: Kpiheader[]) => {
    //  debugger;
      this.KPI = data;
     this.showKpi = data.slice(0,5);
     if(this.showKpi.filter(x=>x.type=='4').length==0)
     {
       this.selectionLimit=5;
      this.selectedCategories = this.showKpi;
     }
     else{
      this.selectionLimit=4;
      var items=[];
      var count=0;
      for(var itm of this.showKpi)
      {
        if(itm.type!='4'&&count==0)
        { count++;

        }
        else{
          items.push(itm);
        }
      }
      this.showKpi=items;
      this.selectedCategories = items;
     }
     
     
    });

     this._dashboardService.getStackedBarData().
    subscribe((data: StackedBarEntity[]) => {
      
      this.StackedBarTasks = data;
      this.setStackedBarData(1, 1);

    });
    this._dashboardService.getGroupedBarData().
    subscribe((data: GroupedBarEntity[]) => {
      
      this.groupedBarTasks = data;
      this.setGroupedData(1, 1);

    });
    this._dashboardService.getHalfPieData().
    subscribe((data: HalfPieEntity[]) => {
      
      this.halfPieTasks = data;
      this.setHalfDonutData(1, 1);

    });
    this._dashboardService.getThreeDivData().
    subscribe((data: ThreeDivEntity[]) => {
      
      this.threeDivTasks = data;
      this.setThreeDivData(1, 1);

    });
   
  }

  showKpi: Kpiheader[];
    selectedCategories: any[] = [];  
    KPI: Kpiheader[]; saveButton= false;
    selectionLimit=5;
  
   checklength(){

    if(this.selectedCategories.filter(x=>x.type=='4').length==0)
    {
     this.selectionLimit=5;
    }
    else{
      this.selectionLimit=4;
    }
    //  this.saveButton= true;
     console.log("here"+this.selectedCategories.length)
     console.log(this.selectedCategories)
     if(this.selectedCategories.length == this.selectionLimit)
     {
       return  this.saveButton = true;
  
     }
     else{
        this.saveButton = false;
     }
     
   }
  
  selectedKpi(){
    // if(this.selectedCategories.length <){
    
    // }else{
    this.showKpi=[];
    this.showKpi = this.selectedCategories;
    // }
    // this.dataPK=0.7;
    // this.vc.dpk=0.7;
    // this.vc.mymethod();
  
    // console.log(this.selectedCategories)
    // this.KPI.map((data=>{
    //   this.categories.map((data2=>{
    //     if(data.name==data2.name){
    //       data2.bolean = true;
  
    //     }
    //   }))
    // }))
    // console.log(this.categories)
  }
  
  getObjByParentId(parentId) {
    let newNodes: NodeEntity[];
    newNodes = [];
    var results = this.dbNodes.filter(x => x.ParentId == parentId);
    for (var i = 0; i < results.length; i++) {
      var obj = results[i];
      var node = this.dbNodes.find(x => x.Id == obj.Id);
      let newNode: NodeEntity;

      newNode = new NodeEntity();
      newNode.id = node.Id;
      newNode.text = node.Abbr;
      if (parentId == 0) {
        newNode.isRoot = true;
      }
      newNode.children = this.getObjByParentId(newNode.id);
      newNodes.push(newNode);

    }

    return newNodes;

  }

  selectNode(nodeId: number) {
   // debugger;
    let selectedMenu: MenuItem;
    this.donutInputData = [];
    selectedMenu = this._dashboardService.getSelectedMenu();
    this.selectedCategories.map((data)=>{
      // debugger;
      console.log(this.selectedCategories)
      console.log(data)
      if (data.type== "1"){
        this.setDonutData(nodeId, selectedMenu.Id);
        //this.vc.donutInputData = this.donutInputData;
         this.vc.mymethod(this.spMainData);
      
      }
      if(data.type == "4")
      {
       
        this.setPieData(nodeId,selectedMenu.Id)
    // this.vc1.pieInputdata = this.pieInputdata;
    this.vc1.mymethod(this.pieInputdata);
      }
      if(data.type == "5"){
        this.setGroupedData(nodeId,selectedMenu.Id)
        this.vc2.mymethod(this.groupedBarInputData);
      }
      if(data.type == "2"){
        this.setHalfDonutData(nodeId,selectedMenu.Id)
        this.vc3.mymethod(this.halfDonutInputData);
      }
      if(data.type == "3"){
        this.setStackedBarData(nodeId,selectedMenu.Id)
        this.vc4.mymethod(this.stackedBarInputData);
      }
      if(data.type == "6"){
        this.setThreeDivData(nodeId,selectedMenu.Id)
        // this.vc4.mymethod(this.stackedBarInputData);
      }
    });
   
    console.log(this.showKpi)
   
  }
  setThreeDivData(nodeId, menuId){
    let tasks = this.threeDivTasks.filter(x => x.NodeId == nodeId && x.MenuId == menuId);
    console.log(tasks);
   
    if(tasks.length == 0){
     let obj=[
      {"Name":"Open",
      "color":"bg_4",
        "Name2":"Milestone",
      "Value":0,

      "NodeId":0,
      "MenuId":0,
    },
    {"Name":"closed",
    "color":"bg_4",
      "Name2":"Milestone",
    "Value":0,

    "NodeId":0,
    "MenuId":0,
  },
  {"Name":"Missed",
  "color":"bg_4",
    "Name2":"Milestone",
  "Value":0,

  "NodeId":0,
  "MenuId":0,
},
     ]
     this.threeDivInputData=[]
        
      this.threeDivInputData = obj;


    }
    else{
      this.threeDivInputData= tasks;

    }
  }
  setStackedBarData(nodeId, menuId){
    let tasks = this.StackedBarTasks.filter(x => x.NodeId == nodeId && x.MenuId == menuId);
    console.log(tasks);
    this.stackedBarInputData= tasks;
  }
  setHalfDonutData(nodeId, menuId){
    let tasks = this.halfPieTasks.filter(x => x.NodeId == nodeId && x.MenuId == menuId);
    console.log(tasks);
   if(tasks.length ==0){
    // let obj: HalfPieEntity = new HalfPieEntity();
    // let task2: DonutEntity = new DonutEntity();

     let obj =[ { 
       'label':'No Data',
      'value' : 100,
     'color' : '#CCCCCC',
     "NodeId":0,
     "MenuId":0,
     "count":0

    }]
    this.halfDonutInputData =[];
     this.halfDonutInputData=obj
   }
    // let task :PieEntity = new PieEntity()
    else{
    this.halfDonutInputData=tasks;
    }
  }
  setPieData(nodeId, menuId) {
    let tasks = this.pietasks.filter(x => x.NodeId == nodeId && x.MenuId == menuId);
    console.log(tasks);
   
    // let task :PieEntity = new PieEntity()
    this.pieInputdata=tasks

   
  }
  groupedBarEmpty= true;
  setGroupedData(nodeId, menuId) {
    let tasks = this.groupedBarTasks.filter(x => x.NodeId == nodeId && x.MenuId == menuId);
    console.log(tasks);
if (tasks.length == 0)
{console.log("hi")
    this.groupedBarEmpty = false;
}
else{
  this.groupedBarEmpty = true;

    this.groupedBarInputData=tasks 
    
}
  }

  setDonutData(nodeId, menuId) {
    // debugger;
    let tasks = this.tasks.filter(x => x.NodeId == nodeId && x.MenuId == menuId);
    this.selectedTasks=tasks;
    let task3: DonutEntity = new DonutEntity();
    let task4: DonutEntity = new DonutEntity();
    let plannedValue:number=0,actualValue:number=0;
    tasks.forEach(x=>{
      plannedValue+=x.PlannedCost;
      actualValue+=x.ActualCost;
    })
    
    

    let UnCompletedTasks = tasks.filter(x => !x.IsCompleted);
    // if (tasks.length == 0) {
    //   this.note = "No task available for this module.";
    // }
    // else {
    //   this.note = "";
    // }
    this.spTotalTasks=tasks.length;
    this.spMissedTasks=UnCompletedTasks.length;
    if (UnCompletedTasks.length == 0||tasks.length == 0) {
      let task1: DonutEntity = new DonutEntity();
      let task2: DonutEntity = new DonutEntity();

      if(tasks.length == 0)
      {
        task1.count = 0;
        task2.count = 100;
      }
      else{
      
        task1.count = tasks.length;
        task2.count = 0;
      }

      task1.color = "yellow";
      task2.color = "#CCCCCC";

      
      this.donutInputData.push(task1);
      this.donutInputData.push(task2);

    }
    else {
      let value = Math.abs(((UnCompletedTasks.length / tasks.length) * 100)/2);
      let task1: DonutEntity = new DonutEntity();
      let task2: DonutEntity = new DonutEntity();


      task1.count = 100 - value;
      task2.count = value;

      task1.color = "yellow";
      task2.color = "#CCCCCC";

      this.donutInputData.push(task1);
      this.donutInputData.push(task2);



    }
    
    if(tasks.length == 0)
    {
      task3.count = 0;
      task4.count = 100;
    }
    else{
    
      task3.count = tasks.length;
      task4.count = 0;
    }

    task3.color = "red";
    task4.color = "green";
    let keyValue = Math.abs(((UnCompletedTasks.length / tasks.length) * 100)/2);
    console.log("keyyyyyyy");
    console.log(keyValue);
    keyValue=isNaN(keyValue)?0:keyValue;
    task4.count=100-keyValue;
    task3.count=keyValue;
    // debugger;
    this.donutInputData2=[];
    this.donutInputData2.push(task3);
    this.donutInputData2.push(task4);
    this.spiIndex=(actualValue/plannedValue).toString()=='NaN'?'0.0':(actualValue/plannedValue).toFixed(1).toString();
    
    this.spiIndexValue=(this.donutInputData[0].count/100).toFixed(1).toString();
    
    this.spMainData=new SpEntity();
    this.spMainData.firstDonutData=this.donutInputData;
    this.spMainData.secondDonutData=this.donutInputData2;
    this.spMainData.spiIndex=this.spiIndex;
    this.spMainData.indexValue=this.spiIndexValue;
    this.spMainData.tasks=this.spTotalTasks;
    this.spMainData.missedTasks=this.spMissedTasks;

  }
  display:Boolean=false;
  showMetaData(chartType)
  {
    //alert(chartType);
    this.display=true;

  }
  
}
