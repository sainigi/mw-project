import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  orders=[1,1,1];

  steps=[
    {id:0,title:"PLACED",isComplete:true},
    {id:1,title:"CONFIRMED",isComplete:true},
    {id:2,title:"SHIPPED",isComplete:false},
    {id:3,title:"DELIVERED",isComplete:false},
  ]

}
