import { Component, OnInit } from '@angular/core';
import { PrestashopService } from '../prestashop.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  title: any;
  categories: any;
  listSubscription: Subscription;

  constructor(private ps: PrestashopService) {
    
  }

  ngOnInit() {
    this.ps.getCategories().subscribe((response: any) => {
      console.log(response);
      this.categories = response.categories;
      //let key = Object.keys(this.categories);
      console.log(this.categories);
    })
  }

  ngOnDestroy() {}

}
