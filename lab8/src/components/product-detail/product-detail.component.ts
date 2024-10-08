import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { Products } from '../../types';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService =  inject(ProductServiceService);
  productId = -1;
  products = this.productService.getAll();
  product: Products;
  constructor() {
    this.productId = Number(this.route.snapshot.params['id']);
    this.product = this.products.find(p => p.productId === this.productId)!;
  }
}
