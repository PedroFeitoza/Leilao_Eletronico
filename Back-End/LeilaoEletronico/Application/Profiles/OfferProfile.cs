using AutoMapper;
using Domain.Models;
using Domain.Models.InputModels;

namespace Application.Profiles
{
    public class OfferProfile : Profile
    {
        public OfferProfile()
        {
            CreateMap<OfferInputModel, Offer>();
        }
    }
}
