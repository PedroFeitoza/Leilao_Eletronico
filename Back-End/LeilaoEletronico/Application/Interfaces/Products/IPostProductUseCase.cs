using Domain;
using Domain.Models.InputModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces.Products
{
    public interface IPostProductUseCase
    {
        public Task<Product> Execute(ProductInputModel model);
    }
}
