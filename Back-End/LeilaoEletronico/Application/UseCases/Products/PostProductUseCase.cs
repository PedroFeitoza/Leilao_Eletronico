using Application.Interfaces.Products;
using AutoMapper;
using Domain;
using Domain.Models.InputModels;
using Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases
{
    public class PostProductUseCase : IPostProductUseCase
    {
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;

        public PostProductUseCase(IProductRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<Product> Execute(ProductInputModel inputModel)
        {
            var product = _mapper.Map<Product>(inputModel);
            var repoProduct = await _repository.PostAsync(product);
            return repoProduct;
        }
    }
}
