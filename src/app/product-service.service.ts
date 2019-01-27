import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

   // this is product array
   productsData = ['A Book', 'house', 'Phone'];
  // Add New Subject from RXJS and It will help you to asyn the changes automatically
   productDataArrayUpdate = new Subject();

  constructor() { }
  // Adding New Product
  addProd(productValue) {
    // push is use for add value to exsist array
    this.productsData.push(productValue);
    // this is asyncing the changes ontime
    this.productDataArrayUpdate.next();

  }
  // Load Exist product
  getProduct() {
    return [...this.productsData];
  }

  // Remove Added products
  removeProd(product) {
    // filter product data and update the exist productData array
    this.productsData = this.productsData.filter(prod => prod !== product);
    // event emmit then change or asyncronus a value automatically
    this.productDataArrayUpdate.next();

  }


}
