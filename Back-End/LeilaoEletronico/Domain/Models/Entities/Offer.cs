using System;

namespace Domain.Models
{
    public class Offer
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ResponsibleName { get; set; }
        public decimal Bid { get; set; }
        public DateTime DateOffer { get; set; }
    }
}
