using Domain;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class ProductRepository : IProductRepository
    {
        private readonly LeilaoDbContext _con;

        public ProductRepository(LeilaoDbContext con)
        {
            _con = con;
        }

        public async Task<List<Product>> Get()
        {
            await using (var db = _con) 
            {
                return db.Products.ToList();
            }
        }

        public async Task Post(Product model)
        {
            await using (var db = _con) 
            {
                await db.Products.AddAsync(model);
                await db.SaveChangesAsync();
            }
        }
    }
}
