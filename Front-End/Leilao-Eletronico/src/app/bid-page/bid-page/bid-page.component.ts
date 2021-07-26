import { DataSource } from '@angular/cdk/collections';
import { isNgTemplate } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from './../../Services/product.service';
import { InputOffer } from './../../Models/InputOffer';
import { OfferService } from 'src/app/Services/offer.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}


@Component({
  selector: 'app-bid-page',
  templateUrl: './bid-page.component.html',
  styleUrls: ['./bid-page.component.scss']
})


export class BidPageComponent implements OnInit{

  constructor(private offerService: OfferService, private productService: ProductService) { }

  displayedColumns: string[] = ['ProductName', 'InitialOffer', 'ProductResponsible','ClosingDate','LastBid','LastBidDate', 'BidResponsible', 'NewBid'];
  products: Product[] = [];
  isOfferValid: boolean = false;

  ngOnInit(): void {
    this.productService.getAllProducts().pipe(delay(0)).
    subscribe(products => {
      //console.table(products);
      console.log(products.join);
      products.forEach(item => {
        let lastBid = Number.parseInt((item.bids.length-1).toString());
        console.log(item.bids.length);
        item.lastBidValue = item.bids.length > 0? item.bids[lastBid].bid : 0;
        item.lastBidDate = item.bids.length > 0? item.bids[lastBid].dateOffer : '-';
        console.log('DATA: '+item.lastBidDate)
        item.lastBidResponsible = item.bids.length > 0? item.bids[lastBid].responsibleName : 'Sem Lances';
      })
      this.products = products;
      console.table(this.products)
      //console.log(this.products);
    }, err =>{
      console.log("Connection Failed");
    })
  }

  offerValidator(product: Product, bid: any) {
    let closingDate: Date = product.bidsClosingDate != null ? product.bidsClosingDate: new Date(1,1,1);
    let initialOffer: number = product.initialOffer != null ? product.initialOffer : Number.MAX_VALUE;
    let lastBid: number = product.lastBidValue != null ? product.lastBidValue : Number.MAX_VALUE;
    let currentDate: Date = new Date();

    if(currentDate >= closingDate) {
      this.isOfferValid = false;
      return;
    }
    if(bid <= initialOffer) {
      this.isOfferValid = false;
      return;
    }
    if(bid <= lastBid) {
      this.isOfferValid = false;
      return;
    }
    this.isOfferValid = true;
  }
  onSubmit(product: Product, bid: any)
  {
    let container = document.getElementById('newBid') as HTMLInputElement;
    let productId = product.id;
    let BidResponsible = localStorage.getItem('Name');
    let newBid = Number.parseFloat(container.value);
    let offer: InputOffer = {
      id: productId,
      responsibleName: BidResponsible,
      bid: bid
    }

    console.log(offer);
    console.log(JSON.stringify(offer));

    this.offerService.addOffer(offer).pipe(delay(0))
    .subscribe((success) =>{
      alert('Novo Lance Aplicado');
    },
    (error)=> {
      console.log(error)
    }
    );

  }
}
