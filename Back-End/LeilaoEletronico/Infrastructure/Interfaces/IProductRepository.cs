using Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Interfaces
{
    public interface IProductRepository
    {
        public Task<List<Product>> Get();
        public Task Post(Product model);
    }
}
