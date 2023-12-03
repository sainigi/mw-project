import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  selectedSize:any
  reviews = [1,1,1,1,1];
  ngOnInit(): void {
    
  }

  handleAddToCart(){
    console.log('this.selectedSize',this.selectedSize)
  }
}
