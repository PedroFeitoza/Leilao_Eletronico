using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class BidsController : ControllerBase
    {
        private readonly LeilaoDbContext _con;

        public BidsController(LeilaoDbContext con)
        {
            _con = con;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_con.Offers.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok();
        }
    }
}
