import { DataSource } from '@angular/cdk/collections';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs/operators';
import { Offer } from 'src/app/Models/Offer';
import { Product } from 'src/app/Models/Product';
import { ProductService } from './../../Services/product.service';

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

  constructor(private productService: ProductService) { }

  displayedColumns: string[] = ['ProductName', 'InitialOffer', 'ProductResponsible','ClosingDate','LastBid','LastBidDate', 'BidResponsible', 'NewBid'];
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().pipe(delay(1500)).
    subscribe(products => {
      //console.table(products);
      console.log(products.join);
      this.products = products;
      products.forEach(item => {
        let lastBid = Number.parseInt((item.bids.length-1).toString());
        console.table(item.bids[lastBid])
        item.lastBidValue = item.bids.length > 0? item.bids[lastBid].bid : 0;
      })
      //console.log(this.products);
    }, err =>{
      console.log("Connection Failed");
    })
  }
}
