using Domain;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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

        public async Task<List<Product>> GetAsync()
        {
            using (var db = _con) 
            {
                var result = await db.Products.Include(o => o.Bids).ToListAsync();  //ToListAsync();
                return result;
            }
        }

        public async Task<Product> GetByIdAsync(int id)
        {
            using (var db = _con)
            {
                var result = await db.Products.SingleOrDefaultAsync(i => i.Id == id);
                return result;
            }
        }

        public Product Update(Product model)
        {
            using (var db = _con)
            {
                db.Products.Update(model);
                db.SaveChangesAsync();
                return model;
            }
        }

        public async Task<Product> PostAsync(Product model)
        {
            using (var db = _con) 
            {
                await db.Products.AddAsync(model);
                await db.SaveChangesAsync();
                return model;
            }
        }
    }
}
