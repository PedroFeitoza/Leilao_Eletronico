import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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


export class BidPageComponent{

  constructor() { }
  public products: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079},
    {position: 2, name: 'Helium', weight: 4.0026},
    {position: 3, name: 'Lithium', weight: 6.941},
    {position: 4, name: 'Beryllium', weight: 9.0122},
    {position: 5, name: 'Boron', weight: 10.811},
    {position: 6, name: 'Carbon', weight: 12.0107},
    {position: 7, name: 'Nitrogen', weight: 14.0067},
    {position: 8, name: 'Oxygen', weight: 15.9994},
    {position: 9, name: 'Fluorine', weight: 18.9984},
    {position: 10, name: 'Neon', weight: 20.1797},
  ]
  displayedColumns: string[] = ['position', 'name', 'weight', 'newBid'];
}
