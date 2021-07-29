import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InputOffer } from '../Models/InputOffer';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  }),
  withCredentials: false
};

@Injectable({
  providedIn: 'root'
})
export class OfferService {
 // baseUrl: string = "/api/Offers"
 baseUrl = 'https://localhost:44344/'
constructor(private http: HttpClient) { }

addOffer(offer: InputOffer): Observable<InputOffer>{
  console.log('SERVIÇO');
  console.log(offer);
  return this.http.post<InputOffer>(this.baseUrl, offer);
}

addOfferSecondary(offer: InputOffer) {
  const url = this.baseUrl.concat('api/Offers');
  let item: InputOffer = {
     productId: 2,
     bid: 20000,
     responsibleName: 'Nome'
  }
  console.log('SERVIÇO');
  console.log(offer);
  return this.http.post<InputOffer>(url, offer);
}

errorHandler(e: any): Observable<any> {
  console.log(e);
  return EMPTY;
}

}
