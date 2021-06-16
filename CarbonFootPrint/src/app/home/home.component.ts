import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Catagory } from '../models/catagory.model';
import { User } from '../models/user.model';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catagory : Catagory=new Catagory();
  step = 0;
  user:User;
  isLoading:boolean=false;
  @Input() displayState: string;
  @Input() userName: string;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private commonService: CommonService,private _snackBar: MatSnackBar) {
    
   }

  ngOnInit(): void {
  }

  save()
  {
    this.isLoading=true;
    this.commonService.GetUserData.subscribe(user => this.user = user);
    this.catagory._id="csamazon:"+this.user.email;
    this.catagory.name=this.user.email;
    this.commonService.addCarbonData(this.catagory)
    .subscribe(data => {
      console.log(data)
    }) ;

    setTimeout(() => {
      this.isLoading=false;
      this._snackBar.open("Record has been saved successfully", "Close",{duration:3000});
      this.catagory=new Catagory();
     }, 3000);
 

    
  }


}
