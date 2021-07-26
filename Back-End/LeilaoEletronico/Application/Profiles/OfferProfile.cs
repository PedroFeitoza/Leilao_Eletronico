using AutoMapper;
using Domain.Models;
using Domain.Models.InputModels;
using System;
using System.Collections.Generic;
using System.Text;

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
