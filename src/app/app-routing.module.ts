import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
// import { DashboardComponent } from './dashboard-header/dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardHeaderComponent },
  { path: '', component: DashboardComponent, outlet: 'sidebar' },
  {
    path: 'dashboardHeader', component: DashboardHeaderComponent,
    // children:[

    //   { path: 'dashboard', component: DashboardComponent,outlet: 'sidebar' },
    // ]
  },
  // { path: 'test', component: TestComponent, outlet: 'sidebar' },
  { path: 'report', component: ReportHeaderComponent },
  { path: 'dashboard', component: DashboardComponent, outlet: 'sidebar' }
  
  
];
//  outlet: 'sidebar'
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
