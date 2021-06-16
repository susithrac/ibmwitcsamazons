import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showSpinner:boolean;
  constructor(private router: Router,public dialog: MatDialog) { 
    this.showSpinner=false;
  }

  ngOnInit(): void {
  }
  login() : void {
    this.showSpinner=true;
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
    this.showSpinner=false;
    this.router.navigate(['/dashboard']);
  }

  

}
