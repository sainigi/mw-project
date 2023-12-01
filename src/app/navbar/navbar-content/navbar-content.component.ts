import { Component, Input, OnInit } from '@angular/core';
import { navigation } from './navbar-content';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss']
})
export class NavbarContentComponent implements OnInit{

  category:any;
  @Input() selectedSection:any;

  ngOnInit(): void {
    this.category = navigation;
    console.log('SelectedSection---->',this.selectedSection);
  }

}
