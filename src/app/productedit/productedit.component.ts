import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  productForm:any;
  currentId:any;
  constructor(private activeRoute:ActivatedRoute,private productService:ProductService,private route:Router) { 
    this.currentId=activeRoute.snapshot.params.id
  }

  ngOnInit(): void {
    let currentProductData=this.productService.returnProductById(this.currentId)
    this.productForm=this.fb.group({
      "productname":this.fb.control("",Validators.required),
      "productprice":this.fb.control(0,Validators.required),
      "discount":this.fb.control(0,[Validators.min(0),Validators.max(5)]),
      "type":this.fb.control("")
    })
    this.productForm.patchValue(currentProductData)
  }
  updateForm(){
    this.productService.updateProductById(this.currentId,this.productForm.value);
    this.route.navigate(["/productlist"])
  }

}
