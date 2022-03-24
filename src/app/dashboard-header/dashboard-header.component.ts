import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service'
import { MenuItem } from '../model/menu-item';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private dashboardService: DashboardService) { }
  menuItems:MenuItem[];
  ngOnInit() {
    this.menuItems=[];
    this.dashboardService.getDashboardMenuItems().subscribe((data: MenuItem[]) =>{ 
      
      this.menuItems = data;
      this.dashboardService.menus=data;
      this.dashboardService.selectedMenu=data[0];
    });
  }

  onItemClick(value) {
    this.menuItems.forEach(function (menu) {
      if (menu.Text == value) {
        menu.IsSelected = true;
      }
      else {
        menu.IsSelected = false;
      }
    });
    this.dashboardService.menus=this.menuItems;
   
    // this.router.navigate(["/dashboardHeader","dashboard"] ); 
    // this.router.navigate(["/dashboardHeader",{outlets: {sidebar: 'dashboard'}}], { queryParams: { type: value } })
    //this.router.navigate(['', { outlets: { sidebar: 'dashboard' } }], { queryParams: { type: value } });
   
  }
}
