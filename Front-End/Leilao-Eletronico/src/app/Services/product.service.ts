import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/Product';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "/api/Products";

constructor(private http: HttpClient) { }


getAllProducts(): Observable<Product[]>
{
  console.log("SERVICE");
  return this.http.get<Product[]>(this.baseUrl).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  );
}


addProduct(product: Product): Observable<Product>{
  return this.http.post<Product>(this.baseUrl, product).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  );
}

errorHandler(e: any): Observable<any> {
  console.log(e);
  return EMPTY;
}
}



  //baseUrl: string = "http://localhost:3000/Vaccine/";



