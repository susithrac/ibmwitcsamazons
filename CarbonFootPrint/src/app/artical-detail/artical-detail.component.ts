import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artical-detail',
  templateUrl: './artical-detail.component.html',
  styleUrls: ['./artical-detail.component.scss']
})
export class ArticalDetailComponent implements OnInit {
 list: any[]=[
          {
            title:"Housing", key:"housing",
                sublist:[
                  { text:"Electricity", val:"electricity"},
                  { text:"Natural Gas", val:"naturalGas"},
                  { text:"Fuel Oil", val:"fuelOil"},
                  { text:"LPG", val:"lPG"},
                  { text:"Waste", val:"waste"},
                  { text:"Water", val:"water"},
                ]
          },
          {
            title:"Travel", key:"travel",
                sublist:[
                  { text:"Vehicle", val:"vehicle"},
                  { text:"Bus", val:"bus"},
                  { text:"Metro", val:"metro"},
                  { text:"Taxi", val:"taxi"},
                  { text:"Rail", val:"rail"},
                  { text:"Flying", val:"flying"},
                ]
          },
          {
            title:"Food", key:"food",
                sublist:[
                  { text:"Red Meat", val:"redMeat"},
                  { text:"White Meat", val:"whiteMeat"},
                  { text:"Dairy", val:"dairy"},
                  { text:"Cereals", val:"cereals"},
                  { text:"Vegetables", val:"vegetables"},
                  { text:"Fruit", val:"fruit"},
                  { text:"Oils", val:"oils"},
                  { text:"Snacks", val:"snacks"},
                  { text:"Drinks", val:"drinks"},
                ]
          },
          {
            title:"Products", key:"products",
                sublist:[
                  { text:"Electronics", val:"electronics"},
                  { text:"Household", val:"household"},
                  { text:"Clothes", val:"clothes"},
                  { text:"Medical", val:"medical"},
                  { text:"Recreational", val:"recreational"},
                  { text:"Other", val:"other"}
                ]
          },
          {
            title:"Services", key:"services",
                sublist:[
                  { text:"Health", val:"health"},
                  { text:"Finance", val:"finance"},
                  { text:"Recreation", val:"recreation"},
                  { text:"Education", val:"education"},
                  { text:"Communications", val:"communications"},
                  { text:"Other", val:"other"}
                ]
          }
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
