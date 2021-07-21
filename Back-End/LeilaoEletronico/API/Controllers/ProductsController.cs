using Infrastructure.Data;
using Domain.Models.InputModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly LeilaoDbContext _con;

        public ProductsController(LeilaoDbContext con)
        {
            _con = con;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_con.Products.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
           return Ok();
        }
        
        [HttpPost]
        public IActionResult Post([FromBody] ProductInputModel inputModel)
        {
            var product = new Product() {
                ProductName = inputModel.ProductName,
                ProductDescription = inputModel.ProductDescription,
                InitialOffer = inputModel.InitialOffer,
                BidsClosingDate = inputModel.BidsClosingDate,
            };

            _con.Products.Add(product);
            _con.SaveChanges();
            return Ok(inputModel);
        }
    }
}
