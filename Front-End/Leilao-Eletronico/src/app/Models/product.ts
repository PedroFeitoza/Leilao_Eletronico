import { Offer } from "./Offer";

export interface Product {
  id?: number | null;
  responsibleName: string | null;
  productName: string | null;
  productDescription: string | null;
  initialOffer: number | null;
  bidsClosingDate: Date | null;
  bids: [Offer] | [];
  lastBidValue?: number;
  lastBidDate?: Date | string;
  lastBidResponsible?: string;
}
