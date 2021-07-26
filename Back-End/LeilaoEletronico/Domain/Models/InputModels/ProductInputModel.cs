using System;

namespace Domain.Models.InputModels
{
    public class ProductInputModel
    {
        //[JsonPropertyName("productName")]
        public string ResponsibleName{ get; set; }
        public string ProductName { get; set; }

        //[JsonPropertyName("productDescription")]
        public string ProductDescription { get; set; }

        //[JsonPropertyName("initialOffer")]
        public decimal InitialOffer { get; set; }

        //[JsonPropertyName("bidsClosingDate")]
        public DateTime BidsClosingDate { get; set; }
    }
}
