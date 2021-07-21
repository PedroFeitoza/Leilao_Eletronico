using Domain.Models;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        public async Task<List<Offer>> Get()
        {
            await using (var db = _con) 
            {
                return db.Offers.ToList();
            }
        }

        public async Task Post(Offer model)
        {
            await using (var db = _con) 
            {
                var product = await db.Products.FindAsync(model.ProductId);
                await db.Offers.AddAsync(model);
                await db.SaveChangesAsync();
            }
        }
    }
}
