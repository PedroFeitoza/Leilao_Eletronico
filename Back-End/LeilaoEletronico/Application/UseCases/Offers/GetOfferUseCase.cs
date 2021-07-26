using Application.Interfaces.Offers;
using Domain.Models;
using Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases.Offers
{
    public class GetOfferUseCase : IGetOfferUseCase
    {
        private readonly IOfferRepository _repository;

        public GetOfferUseCase(IOfferRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<Offer>> Execute()
        {
           return await _repository.GetAsync();
        }
    }
}
