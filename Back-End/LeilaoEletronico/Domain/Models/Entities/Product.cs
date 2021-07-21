using Domain.Models;
using System;
using System.Collections.Generic;

namespace Domain
{
    public class Product
    {
        public int Id { get;  set; }
        public string ProductName { get;  set; }
        public string ProductDescription { get;  set; }
        public decimal InitialOffer { get; set; }
        public DateTime BidsClosingDate { get; set; }
        public IEnumerable<Offer> Bids { get; set; }
    }
}
