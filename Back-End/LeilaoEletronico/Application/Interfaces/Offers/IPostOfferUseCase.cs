using Domain.Models;
using Domain.Models.InputModels;
using System.Threading.Tasks;

namespace Application.Interfaces.Offers
{
    public interface IPostOfferUseCase
    {
        public Task<Offer> Execute(OfferInputModel model);
    }
}
