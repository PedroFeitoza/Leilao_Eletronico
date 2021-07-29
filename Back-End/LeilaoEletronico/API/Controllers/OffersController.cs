using Application.Interfaces.Offers;
using Domain.Models.InputModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class OffersController : ControllerBase
    {
        // api/offers HTTP Get
        /// <summary>
        /// retrieve all bids
        /// </summary>
        /// <returns>list of bids made</returns>
        /// <response code="200">successfully retrieved bid list</response>
        [HttpGet]
        public async Task<IActionResult> GetAsync([FromServices] IGetOfferUseCase useCase)
        {
            var offers = await useCase.Execute();
            return Ok(offers);
        }

        // api/users HTTP POST
        /// <summary>
        /// register a new bid
        /// </summary>
        /// <remarks>
        /// Sample request: 
        /// {
        /// "productId ": 1,
        /// "responsibleName ": "John",
        /// "bid": 100,
        /// }
        /// </remarks> 
        /// <param name="inputModel"></param>
        /// <returns>Newly created object</returns>
        /// <response code="200">Object with bid registration data</response>
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromServices] IPostOfferUseCase useCase, [FromBody] OfferInputModel inputModel)
        {
            var offer = await useCase.Execute(inputModel);
            return Ok(offer);
        }
    }
}
