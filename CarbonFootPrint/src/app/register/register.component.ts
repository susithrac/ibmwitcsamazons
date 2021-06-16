import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user:Register=new Register();
registerForm:FormGroup;

  constructor(private formBuider: FormBuilder,private router: Router) {

   }

  ngOnInit(): void {
    this.registerForm=this.formBuider.group({
      'firstName':[this.user.firstName,[Validators.required]],
      'lastName':[this.user.lastName,[Validators.required]],
      'email':[this.user.email,[Validators.required,Validators.email]],
      // 'gender':[this.user.gender],
      'password':[this.user.password,[Validators.required, Validators.minLength(3)]],
    })
  }
  onRegisterSubmit()
  {
    this.user=this.registerForm.value;
   this.router.navigate(['/login']);
  }
}
