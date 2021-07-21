using Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces.Products
{
    public interface IGetProductUseCase
    {
        public Task<List<Product>> Execute();
    }
}
