using Application.Interfaces.Offers;
using Domain.Models.InputModels;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class OffersController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get([FromServices] IGetOfferUseCase useCase)
        {
            var offers = await useCase.Execute();
            return Ok(offers);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromServices] IPostOfferUseCase useCase, [FromBody] OfferInputModel inputModel)
        {
            var offer = await useCase.Execute(inputModel);
            return Ok(offer);
        }
    }
}
