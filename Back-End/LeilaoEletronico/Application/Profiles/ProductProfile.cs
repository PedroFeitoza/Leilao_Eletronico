using AutoMapper;
using Domain;
using Domain.Models.InputModels;

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
