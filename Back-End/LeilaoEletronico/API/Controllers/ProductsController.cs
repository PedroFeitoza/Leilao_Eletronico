using Domain.Models.InputModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Application.Interfaces.Products;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        // api/products HTTP Get
        /// <summary>
        /// retrieve all products
        /// </summary>
        /// <returns>list of products made</returns>
        /// <response code="200">successfully retrieved products list</response>
        [HttpGet]
        public async Task<IActionResult> GetAsync([FromServices] IGetProductUseCase useCase)
        {
            var products = await useCase.Execute();
            return Ok(products);
        }

        // api/users HTTP POST
        /// <summary>
        /// register a new bid
        /// </summary>
        /// <remarks>
        /// Sample request: 
        ///{
        ///"responsibleName": "Pedro",
        ///"productName": "Computer",
        ///"productDescription": "a gamer computer, to play games :)",
        ///"initialOffer": 99000.99,
        ///"bidsClosingDate": "2021-07-29T13:59:05.475Z"
        ///}
        /// </remarks> 
        /// <param name="inputModel"></param>
        /// <returns>Newly created object</returns>
        /// <response code="200">Object with product registration data</response>
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromServices] IPostProductUseCase useCase, [FromBody] ProductInputModel inputModel)
        {
            var product = await useCase.Execute(inputModel);
            return Ok(product);
        }
    }
}
