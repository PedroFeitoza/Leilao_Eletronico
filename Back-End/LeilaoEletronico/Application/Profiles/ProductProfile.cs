using AutoMapper;
using Domain;
using Domain.Models;
using Domain.Models.InputModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Profiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<ProductInputModel, Product>();
        }
    }
}
