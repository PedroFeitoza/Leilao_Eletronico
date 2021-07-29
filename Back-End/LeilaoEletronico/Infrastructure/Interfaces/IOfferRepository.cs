using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Interfaces
{
    public interface IOfferRepository
    {
        public Task<List<Offer>> GetAsync();
        public Task PostAsync(Offer model);
    }
}
