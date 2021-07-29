using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Interfaces.Offers
{
    public interface IGetOfferUseCase
    {
        public Task<List<Offer>> Execute();
    }
}
