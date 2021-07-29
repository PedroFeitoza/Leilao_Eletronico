using Domain.Models;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Repositorys
{
    public class OfferRepository : IOfferRepository
    {
        private readonly LeilaoDbContext _con;

        public OfferRepository(LeilaoDbContext con)
        {
            _con = con;
        }

        public async Task<List<Offer>> GetAsync()
        {
            using (var db = _con)
            {
                return await db.Offers.ToListAsync();
            }
        }

        public async Task PostAsync(Offer model)
        {
            using (var db = _con) 
            {
                var product = await db.Products.FindAsync(model.ProductId);
                await db.Offers.AddAsync(model);
                await db.SaveChangesAsync();
            }
        }
    }
}
