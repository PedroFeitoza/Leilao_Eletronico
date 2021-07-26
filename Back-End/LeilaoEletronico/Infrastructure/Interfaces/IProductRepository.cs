using Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Interfaces
{
    public interface IProductRepository
    {
        public Task<List<Product>> GetAsync();
        public Task<Product> PostAsync(Product model);
        public Task<Product> GetByIdAsync(int id);
        public Product Update(Product model);

    }
}
