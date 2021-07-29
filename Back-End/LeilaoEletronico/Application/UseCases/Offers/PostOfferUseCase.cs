using Application.Interfaces.Offers;
using AutoMapper;
using Domain.Models;
using Domain.Models.InputModels;
using Infrastructure.Interfaces;
using System;
using System.Threading.Tasks;

namespace Application.UseCases.Offers
{
    public class PostOfferUseCase : IPostOfferUseCase
    {
        private IOfferRepository _offerRepository;
        private IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public PostOfferUseCase(IProductRepository productRepository, IOfferRepository offerRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _offerRepository = offerRepository;
            _mapper = mapper;
        }
        public async Task<Offer> Execute(OfferInputModel inputModel)
        {
            var offer = _mapper.Map<Offer>(inputModel);
            offer.ProductId = inputModel.ProductId;

            var product = await _productRepository.GetByIdAsync(inputModel.ProductId);
            offer.DateOffer = DateTime.Now; 

            if (product != null)
            {
                if (product.BidsClosingDate < offer.DateOffer)
                    return null;

                await _offerRepository.PostAsync(offer);
                return offer;
            }
            return null;
        }
    }
}
