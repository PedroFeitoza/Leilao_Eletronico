import { Offer } from "./Offer";

export interface Product {
  id?: number;
  responsibleName: string;
  productName: string;
  productDescription: string;
  initialOffer: number;
  bidsClosingDate: Date | string;
  bids: [Offer] | [];
  lastBidValue: number;
  lastBidDate: Date | string;
  lastBidResponsible: string;
}
