import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment'
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (environment.production) {
            if (!req.url.includes("http:")) {
                return next.handle(req);
            }
        }
        else {
            if (req.url.includes("GetDashboardMenuItems")) {
                const menuItems = [
                    {
                        "Id": 1,
                        "Text": "Overall Performance",
                        "IsSelected": true

                    },
                    {
                        "Id": 2,
                        "Text": "Project Tracking"
                    },
                    {
                        "Id": 3,
                        "Text": "Health & Safety"
                    },
                    {
                        "Id": 4,
                        "Text": "Change Management"
                    },
                    {
                        "Id": 4,
                        "Text": "Contract Management"
                    },

                    {
                        "Id": 5,
                        "Text": "Risk & Compliance"
                    },
                    {
                        "Id": 6,
                        "Text": "Quality & Control"
                    },
                    {
                        "Id": 7,
                        "Text": "Construction Management"
                    },
                    {
                        "Id": 8,
                        "Text": " Architecture & Engineering"
                    },
                    {
                        "Id": 9,
                        "Text": "Cost Management"
                    },
                    {
                        "Id": 10,
                        "Text": "Procurement & Supplier"
                    }
                ];
                return of(new HttpResponse({ status: 200, body: menuItems }));

            }
            else if(req.url.includes("GetNodes"))
            {
                const nodes=[
                    {
                        "Id": 1,
                        "Name": "Airport Runway",
                        "Abbr": "Airport Runway",
                        "ParentId": 0
                    },
                    {
                        "Id": 2,
                        "Name": "Runway & Taxi Way",
                        "Abbr": "Runway & Taxi Way",
                        "ParentId": 1
                    },
                    {
                        "Id": 3,
                        "Name": "Essential Services",
                        "Abbr": "Essential Services",
                        "ParentId": 1
                    },
                    {
                        "Id": 4,
                        "Name": "Clearing and Site Prep",
                        "Abbr": "Clearing and Site Prep",
                        "ParentId": 1
                    },
                    {
                        "Id": 5,
                        "Name": "Associated Runway Facilities ",
                        "Abbr": "Associated Runway Facilities",
                        "ParentId": 1
                    },
                    {
                      "Id": 6,
                      "Name": "Site Fencing ",
                      "Abbr": "Site Fencing",
                      "ParentId": 4
                  },
                  {
                    "Id": 7,
                    "Name": "Construction Compound ",
                    "Abbr": "Construction Compound",
                    "ParentId": 4
                },
                {
                  "Id": 8,
                  "Name": "Site Access Roads  ",
                  "Abbr": "Site Access Roads",
                  "ParentId": 4
              },
              {
                "Id": 9,
                "Name": "Material Storage  ",
                "Abbr": "Material Storage",
                "ParentId": 4
            },
            {
              "Id": 10,
              "Name": "Drainage Installation  ",
              "Abbr": "Drainage Installation",
              "ParentId": 4
          },
          {
            "Id": 11,
            "Name": "Pavement Construction  ",
            "Abbr": "Pavement Construction",
            "ParentId": 2
        },
        {
          "Id": 12,
          "Name": "Sub-Grade Construction  ",
          "Abbr": "Sub-Grade Construction",
          "ParentId": 2
      },
      {
        "Id": 13,
        "Name": "Flexible Pavement  ",
        "Abbr": "Flexible Pavement",
        "ParentId": 2
    },
    {
      "Id": 14,
      "Name": "Concrete Pavement  ",
      "Abbr": "Concrete Pavement",
      "ParentId": 2
  },
  {
    "Id": 15,
    "Name": "Grooving Concrete Pavement",
    "Abbr": "Grooving Concrete Pavement",
    "ParentId": 14
},
{
  "Id": 16,
  "Name": "Spray Evapouration Retarder",
  "Abbr": "Spray Evapouration Retarder",
  "ParentId": 14
},
{
  "Id": 17,
  "Name": "Laying Of Concrete",
  "Abbr": "Laying Of Concrete",
  "ParentId": 14
},
{
  "Id": 18,
  "Name": "Concrete Delivery",
  "Abbr": "Concrete Delivery",
  "ParentId": 14
},
{
  "Id": 19,
  "Name": "Base Layer",
  "Abbr": "Base Layer",
  "ParentId": 14
},
                ];
                

                return of(new HttpResponse({ status: 200, body: nodes }));
            }
            else if(req.url.includes("GetTasks"))
            {
    //             Id:number;
    // Title:string;
    // Description:string;
    // IsCompleted:boolean;
                const data=[{
                  "Id":1,
                  "Title":"Test 1",
                  "Description":"Test Desc",
                  "IsCompleted":false,
                  "ActualCost":0,
                  "PlannedCost":4000,
                  "NodeId":3,
                  "MenuId":1
                },
                {
                "Id":2,
                "Title":"Test 2",
                "Description":"Test Desc",
                "IsCompleted":false,
                "ActualCost":0,
                "PlannedCost":5000,
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":3,
                "Title":"Test 3",
                "Description":"Test Desc",
                "IsCompleted":false,
                "ActualCost":0,
                "PlannedCost":8000,
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":4,
                "Title":"Test 4",
                "Description":"Test Desc",
                "IsCompleted":false,
                "ActualCost":0,
                "PlannedCost":2000,
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":5,
                "Title":"Test 5",
                "Description":"Test Desc",
                "IsCompleted":true,
                "ActualCost":6000,
                "PlannedCost":5000,
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":6,
                "Title":"Test 6",
                "Description":"Test Desc",
                "IsCompleted":true,
                "ActualCost":400,
                "PlannedCost":400,
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":7,
                "Title":"Test 7",
                "Description":"Test Desc",
                "IsCompleted":true,
                "ActualCost":300,
                "PlannedCost":600,
                "NodeId":3,
                "MenuId":1
              },
              {
                "Id":8,
                "Title":"Test 8",
                "Description":"Test Desc",
                "IsCompleted":true,
                "ActualCost":4000,
                "PlannedCost":5000,
                "NodeId":3,
                "MenuId":1
              }
            ];
                return of(new HttpResponse({ status: 200, body: data }));
            }
            else if(req.url.includes("GetPieTasks"))
            {       const data=[
                {
                "Id":1,
                "Title":"Test 1",
                "name":"Foundation Poured",
                "count":35,
                "color":"blue",
                "NodeId":3,
                "MenuId":1
              },
              {
                "Id":2,
                "Title":"Test 1",
                "name":" Function Poured",
                "count":20,
                "color":"purple",
                "NodeId":3,
                "MenuId":1
              },  {
                "Id":3,
                "Title":"Test 1",
                "name":"structure finalized",
                "count":15,
                "color":"cyan",
                "NodeId":3,
                "MenuId":1
              },  {
                "Id":4,
                "Title":"Test 1",
                "name":"progress Complete",
                "count":30,
                "color":"pink",
                "NodeId":3,
                "MenuId":1
              },
              {
                "Id":5,
                "Title":"Test 1",
                "name":"Foundation Poured",
                "count":15,
                "color":"blue",
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":6,
                "Title":"Test 1",
                "name":"Function Poured",
                "count":10,
                "color":"purple",
                "NodeId":2,
                "MenuId":1
              },  {
                "Id":7,
                "Title":"Test 1",
                "name":"structure pending",
                "count":25,
                "color":"cyan",
                "NodeId":2,
                "MenuId":1
              },  {
                "Id":8,
                "Title":"Test 1",
                "name":"progress Poured",
                "count":40,
                "color":"orange",
                "NodeId":2,
                "MenuId":1
              },
              {
                "Id":9,
                "Title":"Test 1",
                "name":"Foundation Poured",
                "count":10,
                "color":"blue",
                "NodeId":1,
                "MenuId":1
              },
              {
                "Id":10,
                "Title":"Test 1",
                "name":"Function completed",
                "count":30,
                "color":"purple",
                "NodeId":1,
                "MenuId":1
              },  {
                "Id":11,
                "Title":"Test 1",
                "name":"structure completed",
                "count":30,
                "color":"orange",
                "NodeId":1,
                "MenuId":1
              },  {
                "Id":12,
                "Title":"Test 1",
                "name":"Structural progress",
                "count":30,
                "color":"green",
                "NodeId":1,
                "MenuId":1
              },
             
          ];
                return of(new HttpResponse({ status: 200, body: data }));
            }
            else if(req.url.includes("GetDashboardGraphHeader"))
            {  const data= [
                 {
                 "name":" Schedule Performance",
                 "type":"1",
                 "fontAwsomeIcon":"fa-calendar" 
                 
                 },
                 
                 {
                 "name": "Cost Performance",
                 "type":"2",
                  "fontAwsomeIcon":"fa-btc", 
                 
                 },
                 
                 {
                 "name": "Safety Incident",
                 "type":"3",
                  "fontAwsomeIcon":"fa-shield ",
                 },
                 
                 {
                 "name": "Current Progress",
                 "type":"4",
                  "fontAwsomeIcon":"fa-line-chart", 
                  
                 },
                 {
                   "name":"Planned Hours Vs Worked Hours",
                   "type":"5",
                    "fontAwsomeIcon":"fa-bar-chart"
                 },
                 {
                   "name":"Milestone Missed",
                   "type":"6",
                    "fontAwsomeIcon":"fa-bar-chart"
                 },
                 {
                   "name":"Task Status",
                   "type":"7",
                    "fontAwsomeIcon":"fa-tachometer"
                 }
               ];
               return of(new HttpResponse({ status: 200, body: data }));
            }
            else if(req.url.includes("GetGroupedBarTasks"))
            {  const data= [
              {
                "model_name":"Week 1",
                "field1":5,            
                "field2":1,
                "NodeId":1,
                "MenuId":1
               
              },
              {
                "model_name":"week 2",
                "field1":3,
                "field2":4,
                "NodeId":1,
                "MenuId":1
              },
              {
                "model_name":"week 3",
                "field1":1,
                "field2":3,
                "NodeId":1,
                "MenuId":1
              },
              {
                "model_name":"Week 1",
                "field1":2,            
                "field2":5,
                "NodeId":2,
                "MenuId":1
               
              },
              {
                "model_name":"week 2",
                "field1":3,
                "field2":4,
                "NodeId":2,
                "MenuId":1
              },
              {
                "model_name":"week 3",
                "field1":1,
                "field2":3,
                "NodeId":2,
                "MenuId":1
               }
              //,
              // {
              //   "model_name":"Week 1",
              //   "field1":5,            
              //   "field2":1,
              //   "NodeId":3,
              //   "MenuId":1
               
              // },
              // {
              //   "model_name":"week 2",
              //   "field1":3,
              //   "field2":4,
              //   "NodeId":3,
              //   "MenuId":1
              // },
              // {
              //   "model_name":"week 3",
              //   "field1":1,
              //   "field2":3,
              //   "NodeId":3,
              //   "MenuId":1
              // },
              
            ];;
                return of(new HttpResponse({ status: 200, body: data }));
            }
            else if(req.url.includes("GetHalfDonutTasks"))
            {  const data=[	
              { 
                label: 'CDU',
               value: 1924,
                color:'#E27F68',
                "NodeId":3,
               "MenuId":1,
               "count":1924
               },
            {
               label: 'SPD',
             value: 650,
             color:'#D5CFC8',
             "NodeId":3,
             "MenuId":1,
             "count":650
             },
             { 
              label: 'CDU',
             value: 1524,
              color:'#E27F68',
              "NodeId":1,
             "MenuId":1,
             "count":1524
             },
          {
             label: 'SPD',
           value: 1650,
           color:'#D5CFC8',
           "NodeId":1,
           "MenuId":1,
           "count":1650
           },
            ];
                return of(new HttpResponse({ status: 200, body: data }));
            }
             else if(req.url.includes("GetStackedBarTasks"))
            {  const data=[{
              "High":10,
              "Mid":5,
              "Low":15,
              "NodeId":2,
              "MenuId":1,
            },
            {
              "High":5,
              "Mid":15,
              "Low":15,
              "NodeId":1,
              "MenuId":1,
            },
           
            // {
            //   "High":9,
            //   "Mid":15,
            //   "Low":10,
            //   "NodeId":4,
            //   "MenuId":1,
            // },
            {
              "High":9,
              "Mid":15,
              "Low":7,
              "NodeId":5,
              "MenuId":1,
            }
          ];
                return of(new HttpResponse({ status: 200, body: data }));
            }
            else if(req.url.includes("GetThreeDivTasks"))
            {  const data=[
              {"Name":"Open",
              "color":"bg_1",
                "Name2":"Milestone",  
              "Value":7,

                "NodeId":1,
                "MenuId":1,
              },
              {"Name":"closed",
              "color":"bg_2",
                "Name2":"Milestone",  
              "Value":17,

                "NodeId":1,
                "MenuId":1,
              },{"Name":"Missed",
              "color":"bg_3",
                "Name2":"Milestone",
              "Value":27,

              "NodeId":1,
              "MenuId":1,
            },
            {"Name":"Open",
            "color":"bg_1",
              "Name2":"Milestone",
            "Value":71,

            "NodeId":2,
            "MenuId":1,
          },
          {"Name":"closed ",
          "color":"bg_2",
            "Name2":"Milestone",  
          "Value":171,

            "NodeId":2,
            "MenuId":1,
          },{"Name":"Missed ",
          "color":"bg_3",
            "Name2":"Milestone",
          "Value":2,

          "NodeId":2,
          "MenuId":1,
        }

            ];
                return of(new HttpResponse({ status: 200, body: data }));
            }
            
            // else if(req.url.includes("GetTasks"))
            // {  const data=[];
            //     return of(new HttpResponse({ status: 200, body: data }));
            // }
            
        }


    }
}
