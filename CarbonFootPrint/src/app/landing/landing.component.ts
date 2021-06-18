import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Input() displayState: string;
  @Input() userName: string;

  
  title = 'dashboard';
  sideBarOpen = true;
  src = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sideBarToggler() {
    if (this.router.url == '/' || this.router.url == '/welcome') {
      this.sideBarOpen = false;
    }
    else
      this.sideBarOpen = !this.sideBarOpen;

  }
  toggleSideBar() {
    //this.toggleSideBarForMe.emit();
    this.sideBarToggler();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  hideSidebar() {
    this.sideBarOpen = false;
  }
  logOut()
  {
    this.sideBarOpen = false;
    this.router.navigate(['/']);
  }

}
