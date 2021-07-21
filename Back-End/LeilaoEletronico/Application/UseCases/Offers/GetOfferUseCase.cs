using Application.Interfaces.Offers;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases.Offers
{
    public class GetOfferUseCase : IGetOfferUseCase
    {
        public Task<List<Offer>> Execute()
        {
            throw new NotImplementedException();
        }
    }
}
