import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Array<any>=[];
  constructor(private http:HttpClient) { }
  addProduct(data:any){
   return this.http.post(`https://60c7738bafc88600179f5265.mockapi.io/produt`,data)
  }
  returnProduct(){
    return this.http.get(`https://60c7738bafc88600179f5265.mockapi.io/produt`)
  }
  returnProductById(id:number){
    return this.http.get(`https://60c7738bafc88600179f5265.mockapi.io/produt/${id}`)
  }
  updateProductById(id:any,data:any){
    // let index=this.productData.findIndex(p=>p.id==id);
    // data.id=id;
    // this.productData[index]=data;
    return this.http.put(`https://60c7738bafc88600179f5265.mockapi.io/produt/${id}`,data)
  }
  deleteById(id:any){
    return this.http.delete(`https://60c7738bafc88600179f5265.mockapi.io/produt/${id}`)
  }
}
