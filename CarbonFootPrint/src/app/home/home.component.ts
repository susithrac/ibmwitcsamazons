import { Component, Input, OnInit } from '@angular/core';
import { Catagory } from '../models/catagory.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catagory : Catagory=new Catagory();
  step = 0;

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

  constructor() {
    
   }

  ngOnInit(): void {
  }

  save()
  {
    debugger;
    let dd=this.catagory;
  }


}
