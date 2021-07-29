using Domain;
using Domain.Models.InputModels;
using System.Threading.Tasks;

namespace Application.Interfaces.Products
{
    public interface IPostProductUseCase
    {
        public Task<Product> Execute(ProductInputModel model);
    }
}
