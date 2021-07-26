using Domain.Models;
using Domain.Models.InputModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces.Offers
{
    public interface IPostOfferUseCase
    {
        public Task<Offer> Execute(OfferInputModel model);
    }
}
