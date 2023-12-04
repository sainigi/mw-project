import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  constructor(private _router: Router){}

  @Input() product:any;

  navigate(){
    this._router.navigate([`/product-details/${this.product.id}`])
  }

}
