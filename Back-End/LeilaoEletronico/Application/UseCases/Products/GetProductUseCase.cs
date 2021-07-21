using Application.Interfaces.Products;
using Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application
{
    public class GetProductUseCase : IGetProductUseCase
    {
        public Task<List<Product>> Execute()
        {
            throw new NotImplementedException();
        }
    }
}
