import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders=[[1,1],[1,1,1]];
  orderFilter = [
    {value:"on_the_way", label:"On The Way"},
    {value:"delivered", label:"Delivered"},
    {value:"cancelled", label:"Cancelled"},
    {value:"returned", label:"Returned"},
   
  ];

  constructor(private _router:Router){}
  ngOnInit(): void {
    
  }

  navigateToOrderDetails=(id:any)=>{
    this._router.navigate([`order/${id}`]);

  }
}
