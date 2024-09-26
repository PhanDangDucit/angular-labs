import { Injectable } from '@angular/core';
import { Products } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  initProducts: Array<Products> = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN - 0011",
      releaseDate: "March 19, 2016",
      price: 19.95,
      description: "",
      starRating: 3.2,
      imageUrl: "https://www.bing.com/th?id=OPAC.VtucnlpsRrJypQ474C474&o=5&pid=21.1&w=124&h=124&qlt=100&dpr=1&bw=6&bc=FFFFFF"
    },
    {
      productId: 2,
      productName: "Gaden Cart",
      productCode: "GDn-0023",
      releaseDate: "March 18, 2016",
      price: 32.99,
      description: "",
      starRating: 4.2,
      imageUrl: "https://www.bing.com/th?id=OPAC.OVDsflY%2fEQ6qvw474C474&o=5&pid=21.1&w=124&h=124&qlt=100&dpr=1&bw=6&bc=FFFFFF"
    },
  ]
  
  getAll() {
    return this.initProducts;
  }

  getProductFilter(name: string) {
    console.log("query in services:", name);
    return this.initProducts.filter(item => {
      console.log("item:", item);
      return item.productCode.includes(name);
    })
  }
}
