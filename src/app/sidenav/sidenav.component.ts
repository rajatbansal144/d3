import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  isShow = false;
 
  toggleDisplay() {
  
    this.isShow = !this.isShow;
  }
  // animation(){
  //   document.getElementById('slide').className='slider'; 
  // }
  headerNvigation(value) {

   
    if(value == 'dashboard'){
     
    this.router.navigate(['./dashboardHeader']);
    }
    if(value == 'report'){
    
      this.router.navigate(['./report']);
      }
    
  }
}
