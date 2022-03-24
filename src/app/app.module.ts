import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
// import { DashboardComponent } from './dashboard-header/dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonutComponent } from './donut/donut.component';
import { Donut2Component } from './donut2/donut2.component';
import { HalfDonutComponent } from './half-donut/half-donut.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { PieComponent } from './pie/pie.component';
import { Gauge1Component } from './gauge1/gauge1.component';
import { Gauge2Component } from './gauge2/gauge2.component';
import { Gauge3Component } from './gauge3/gauge3.component';
import { StackedBar2Component } from './stacked-bar2/stacked-bar2.component';
import { Test2Component } from './test2/test2.component';
import {BackendInterceptor} from './services/backend-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DashboardService} from './services/dashboard.service';
import {DashboardGraphService} from './dashboard-graph.service';
import {CheckboxModule} from 'primeng/checkbox';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { HalfDonutPositionComponent } from './half-donut-position/half-donut-position.component';
import { StackedBarPositionComponent } from './stacked-bar-position/stacked-bar-position.component';
import { PiePositionComponent } from './pie-position/pie-position.component';
import { DonutPositionComponent } from './donut-position/donut-position.component';
import { GroupedBarComponent } from './grouped-bar/grouped-bar.component';
import { ThreeDivGraphComponent } from './three-div-graph/three-div-graph.component';
import { GaugePositionComponent } from './gauge-position/gauge-position.component';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import { StackedAreaComponent } from './stacked-area/stacked-area.component';

// import { AngularD3TreeLibModule } from 'angular-d3-tree';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardHeaderComponent,
    ReportHeaderComponent,
    TestComponent,
   
    DashboardComponent,
   
    DonutComponent,
   
    Donut2Component,
   
    HalfDonutComponent,
   
    StackedBarComponent,
   
    PieComponent,
   
    Gauge1Component,
   
    Gauge2Component,
   
    Gauge3Component,
   
    StackedBar2Component,
   
    Test2Component,
   
    HalfDonutPositionComponent,
   
    StackedBarPositionComponent,
   
    PiePositionComponent,
   
    DonutPositionComponent,
   
    GroupedBarComponent,
   
    ThreeDivGraphComponent,
   
    GaugePositionComponent,
   
    StackedAreaComponent
   
    
    
  ],
  imports: [
    BrowserModule, AppRoutingModule,HttpClientModule, CheckboxModule,
    AutocompleteLibModule,FormsModule,DialogModule,BrowserAnimationsModule,
    TableModule
  ],
  providers:  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    },
    DashboardService,DashboardGraphService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
