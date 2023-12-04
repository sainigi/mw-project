import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  maxRating = 5;
  initialRating = 3.5;
  
  stars:any;
  currentrating=0;

  constructor(){
    this.stars = Array(this.maxRating).fill(0).map((_,i)=>i+1);
    this.currentrating=this.initialRating;
  }

  rate(rating:number){
    this.currentrating=rating;
  }

}
