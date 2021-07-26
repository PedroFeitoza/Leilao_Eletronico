using Application.Interfaces.Products;
using Domain;
using Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application
{
    public class GetProductUseCase : IGetProductUseCase
    {
        private readonly IProductRepository _repository;

        public GetProductUseCase(IProductRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<Product>> Execute()
        { 
            var products = await _repository.GetAsync();
            return products;
        }
    }
}
