import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// getDetails: any;
constructor(private http:HttpClient) {
}
  getDetails()
  {
    return this.http.get("http://localhost:3000/products");
  }


}
