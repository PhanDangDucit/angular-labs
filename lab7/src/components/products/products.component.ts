import { Component, inject, ViewChild } from '@angular/core';
import { Products } from '../../types';
import { ProductServiceService } from '../../services/product-service.service';
import { FilterProductsComponent } from '../filter-products/filter-products.component';
import { StarComponent } from '../star/star.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, FilterProductsComponent, StarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  initQuery: string = "";
  products: Products[];
  productsServices = inject(ProductServiceService);
  productlists: Array<Products> = this.productsServices.getAll();
  starOfProduct: number = 0;

  constructor() {
    this.products = this.productlists;
  }

  @ViewChild(FilterProductsComponent) viewFilterInputChild!: FilterProductsComponent;
  
  ngAfterViewChecked() {
    // viewFilterInputChild is updated after the view has been checked
    this.filterComponent();
  }

  filterComponent()  {
    if (this.initQuery !== this.viewFilterInputChild.query) {
      this.products = this.viewFilterInputChild.getFilter();
      console.log("hello! You're filtered.");
    }
  }

  showStar(starRating: number) {
    console.log("star rating:", starRating);
    this.starOfProduct = starRating;
  }
}