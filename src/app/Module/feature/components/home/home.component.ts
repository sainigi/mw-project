import { Component, OnInit } from '@angular/core';
import { gounsPage1 } from 'src/data/Gouns/gouns';
import { menJeans } from 'src/data/Men/men_jeans';
import { lehngaCholiPage2 } from 'src/data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/data/shoes';
import { mensKurta } from 'src/data/Men/men_kurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  menJeans:any;
  womenGouns:any;
  lehngaCholi:any;
  mensKurta:any;
  mensShoes:any;

  ngOnInit(): void {
    this.menJeans=menJeans.slice(0,5);
    this.womenGouns=gounsPage1.slice(0,5);
    this.lehngaCholi=lehngaCholiPage2.slice(0,5);
    this.mensShoes=mensShoesPage1.slice(0,5);
    this.mensKurta=mensKurta.slice(0,5);

  }

}
