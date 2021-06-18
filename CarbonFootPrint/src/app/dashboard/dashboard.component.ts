import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../Services/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonService } from '../Services/common.service';
import { User } from '../models/user.model';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:User;
  bigChart:any[] = [];
  cards:any[] = [];
  pieChartHousing :any[] = [];
  pieChartTravel :any[] = [];
  pieChartFood:any[]=[];
  pieChartProducts:any[]=[];
  pieChartServices:any[]=[];

  pieChartHousingTitle :string="Housing";
  pieChartTravelTitle :string="Travel";
  pieChartFoodTitle:string="Foods";
  pieChartProductsTitle:string="Products";
  pieChartServicesTitle:string="Services";


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService,private commonService: CommonService) {
    this.bigChart = [];
    this.cards = [];
    this.pieChartHousing = [];
    this.pieChartTravel = [];
    this.pieChartFood=[];
    this.pieChartProducts=[];
    this.pieChartServices=[];
   }

  ngOnInit() {
    this.commonService.GetUserData.subscribe(user => this.user = user);
    this.getbigChartData();
    this.getPieChartHousing();
    this.getPieChartFood();
    this.getPieChartTravel();
   
    // this.cards = this.dashboardService.cards();
    // this.dataSource.paginator = this.paginator;
  }

 getbigChartData()
 {
  this.commonService.getMainchatData(this.user.email).subscribe((data:any[])=>this.bigChart=data);
}
getPieChartFood()
{
  this.commonService.getPieChartFood(this.user.email).subscribe((data:any[])=>this.pieChartFood=data);
}
getPieChartHousing()
{
  this.commonService.getPieChartHousing(this.user.email).subscribe((data:any[])=>this.pieChartHousing=data);
} 
getPieChartTravel()
{
  this.commonService.getPieChartTravel(this.user.email).subscribe((data:any[])=>this.pieChartTravel=data);
} 

}
