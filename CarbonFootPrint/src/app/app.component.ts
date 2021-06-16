import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  sideBarOpen = true;
  src = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // displayStateStatus = 'hide';
  isShowmaster=false;
  userNameStatus = '';
  onChangeState(value) {
    console.log("Sush");
    console.log(value.email);
    // this.displayStateStatus = 'show';
    this.isShowmaster=true;
    this.userNameStatus = value.userName;
    this.src = value.picture;
  }

}
