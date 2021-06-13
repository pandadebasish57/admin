import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  productForm:any;
  constructor(private productService:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.productForm=this.fb.group({
      "productname":this.fb.control(""),
      "productprice":this.fb.control(""),
      "discount":this.fb.control("0"),
      "type":this.fb.control("")
    })
  }
  submitForm(){
    this.productService.addProduct(this.productForm.value);
    this.route.navigate(["/productlist"])
  }

}
