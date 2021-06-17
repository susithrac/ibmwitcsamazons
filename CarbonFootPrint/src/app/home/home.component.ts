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
  
  monthList=[
    { title:"JAN", value:"1" },
    { title:"FEB", value:"2" },
    { title:"MAR", value:"3" },
    { title:"APR", value:"4" },
    { title:"MAY", value:"5" },
    { title:"JUN", value:"6" },
    { title:"JUL", value:"7" },
    { title:"AUG", value:"8" },
    { title:"SEP", value:"9" },
    { title:"OCT", value:"10" },
    { title:"NOV", value:"11" },
    { title:"DEC", value:"12" }
  ]
  yearList=[
   "2019" ,"2020","2021"
  ]
 
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
    // this.catagory.month="1";
    // this.catagory.year="2021"
  }

  save()
  {
    this.isLoading=true;
    this.commonService.GetUserData.subscribe(user => this.user = user);

    debugger
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
