import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
   getProducts() {
    return [
      {
        title: 'PPXOC Milkyway dress in...',
        image: 'assets/product1.jpg',
        outOfStock: false
      },
      {
        title: 'PPXOC Milkyway dress in...',
        image: 'assets/product2.jpg',
        outOfStock: true
      },
      {
        title: 'Product Name',
        image: 'assets/product3.jpg',
        outOfStock: false
      },
      {
        title: 'Product Name',
        image: 'assets/product4.jpg',
        outOfStock: false
      },
      {
        title: 'Product Name',
        image: 'assets/product5.jpg',
        outOfStock: false
      },
      {
        title: 'Product Name',
        image: 'assets/product6.jpg',
        outOfStock: false
      }
    ];
  }
}
