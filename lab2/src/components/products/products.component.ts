import { Component, inject, ViewChild } from '@angular/core';
import { Products } from '../../types';
import { ProductServiceService } from '../../services/product-service.service';
import { FilterProductsComponent } from '../filter-products/filter-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterProductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  initQuery: string = "";
  products: Products[];
  productsServices = inject(ProductServiceService);
  productlists: Array<Products> = this.productsServices.getAll();

  constructor() {
    this.products = this.productlists;
  }

  @ViewChild(FilterProductsComponent) viewChild!: FilterProductsComponent;
  
  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.initQuery !== this.viewChild.query) {
      this.products = this.viewChild.getFilter();
      console.log("hello! You're filtered.")
    }
  }
}