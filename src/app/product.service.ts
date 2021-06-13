import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Array<Object>=[];
  constructor() { }
  addProduct(data:object){
    this.productData.push(data);
  }
  returnProduct(){
    return this.productData;
  }
}
