using Infrastructure.Data;
using Domain.Models.InputModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Application.Interfaces.Products;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAsync([FromServices] IGetProductUseCase useCase)
        {
            var products = await useCase.Execute();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
           return Ok();
        }
        
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromServices] IPostProductUseCase useCase, [FromBody] ProductInputModel inputModel)
        {
           var product = await useCase.Execute(inputModel);
           return Ok(product);
        }
    }
}
 