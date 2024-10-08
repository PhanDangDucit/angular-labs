import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../../services/product-service.service';
import { Products } from '../../types';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})

export class FilterProductsComponent {
  @Input() query!: string;
  @Input() products!: Products[];
  @Output() queryChange = new EventEmitter<string>();
  productsServices = inject(ProductServiceService);
  getFilter() {
    this.products = this.productsServices.getProductFilter(this.query);
    console.log("productList::", this.products);
    return this.products;
  }
}