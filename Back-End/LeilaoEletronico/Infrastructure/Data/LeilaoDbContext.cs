using Domain;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class LeilaoDbContext : DbContext
    {
        public LeilaoDbContext(DbContextOptions<LeilaoDbContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Offer> Offers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(e =>
            {
                e.HasKey(p => p.Id);

                e.HasMany(p => p.Bids)
                    .WithOne()
                    .HasForeignKey(m => m.ProductId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<Offer>(e =>
            {
                e.HasKey(o => o.Id);
            });
        }
    }
}
