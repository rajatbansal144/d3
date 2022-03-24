import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { MenuItem } from '../model/menu-item';
import { Hierarchy } from '../model/hierarchy';
import { Circle } from '../model/circle';
import { Task } from '../model/task';
import { PieEntity } from '../model/pie-entity';
import { Kpiheader } from '../model/kpiheader';
import { GroupedBarEntity } from '../model/groupedBar-entity';
import { HalfPieEntity } from '../model/halfPie-entity';
import { StackedBarEntity } from '../model/stackedBar-entity';
import { ThreeDivEntity } from '../model/threeDiv-entity';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  menus: MenuItem[];
  selectedMenu: MenuItem;
  constructor(private http: HttpClient, private router: Router) { }
  getDashboardMenuItems() {
    return this.http.get<MenuItem[]>(environment.api_url + "GetDashboardMenuItems");
  }
  getNodes() {
    return this.http.get<Hierarchy[]>(environment.api_url + "GetNodes");
  }
  getCircles() {
    return this.http.get<Circle[]>(environment.api_url + "GetCircles");
  }
  getSelectedMenu() {
    let menus = this.menus.filter(x => x.IsSelected);
    
    if (menus.length > 0) {
      return menus[0];
    }
    return null;
  }
  getSchedulePerformanceData() {
    return this.http.get<Task[]>(environment.api_url + "GetTasks");
  }
  getCurrentProgress() {
    return this.http.get<PieEntity[]>(environment.api_url + "GetPieTasks");
  }
  getDashboardGraphHeader() {
    return this.http.get<Kpiheader[]>(environment.api_url + "GetDashboardGraphHeader");
  }
  getGroupedBarData() {
    return this.http.get<GroupedBarEntity[]>(environment.api_url + "GetGroupedBarTasks");
  }
  getHalfPieData() {
    return this.http.get<[HalfPieEntity]>(environment.api_url + "GetHalfDonutTasks");
  }
  getStackedBarData() {
    return this.http.get<[StackedBarEntity]>(environment.api_url + "GetStackedBarTasks");
  }
  getThreeDivData() {
    return this.http.get<[ThreeDivEntity]>(environment.api_url + "GetThreeDivTasks");
  }
}
