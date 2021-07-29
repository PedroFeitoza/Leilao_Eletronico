using System;

namespace Domain.Models.InputModels
{
    public class ProductInputModel
    {
        public string ResponsibleName{ get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public decimal InitialOffer { get; set; }
        public DateTime BidsClosingDate { get; set; }
    }
}
