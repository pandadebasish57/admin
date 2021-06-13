import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList:Array<any>=[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList=this.productService.returnProduct();
  }

}
