using Application.Interfaces.Products;
using Domain.Models.InputModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases
{
    public class PostProductUseCase : IPostProductUseCase
    {
        public Task Execute(ProductInputModel model)
        {
            throw new NotImplementedException();
        }
    }
}
