import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lehngaCholiPage2 } from 'src/data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  selectedSize:any
  reviews = [1,1,1,1,1];
  relatedProducts:any;

  constructor(private _router:Router){}

  ngOnInit(): void {
    this.relatedProducts = lehngaCholiPage2;
  }

  handleAddToCart(){
    console.log('this.selectedSize',this.selectedSize);

    this._router.navigate([`/cart`])
  }
}
