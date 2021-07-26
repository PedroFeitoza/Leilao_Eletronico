import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InputOffer } from '../Models/InputOffer';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  baseUrl: string = "/api/Offers"
constructor(private http: HttpClient) { }

addOffer(offer: InputOffer): Observable<InputOffer>{
  return this.http.post<InputOffer>(this.baseUrl, offer).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  );
}

errorHandler(e: any): Observable<any> {
  console.log(e);
  return EMPTY;
}

}
