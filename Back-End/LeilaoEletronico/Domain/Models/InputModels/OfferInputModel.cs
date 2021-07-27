using Newtonsoft.Json;

namespace Domain.Models.InputModels
{
    public class OfferInputModel
    {
        [JsonProperty("productId")]
        public int ProductId { get; set; }

        [JsonProperty("responsibleName")]
        public string ResponsibleName { get; set; }

        [JsonProperty("bid")]
        public decimal Bid { get; set; }
    }
}
