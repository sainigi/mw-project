import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() showButton:boolean=true;

  updateCartItem(num:number){
    console.log("num",num);
  }

  removeCartItem(){
    console.log("remove cart item");
  }

}
