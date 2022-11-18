using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetFinalAssessment.Models;


namespace FinalAssessmentWithDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private static List<Owner> owners = new List<Owner>
            {
                new Owner{
                    Id = 1,
                    FirstName = "Petros",
                    LastName = "Grivas",
                    DriverLicense = "095yut"
                }
            };



        [HttpGet]
        public async Task<ActionResult<List<Owner>>> Get()
        {
            return Ok(owners);



        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Owner>> Get(int id)
        {
            var owner = owners.Find(ow => ow.Id == id);
            if (owner == null)
                return BadRequest("Owner is not found!");
            return Ok(owners);
        }



        [HttpPost]
        public async Task<ActionResult<List<Owner>>> Get(Owner owner)
        {
            owners.Add(owner);
            return Ok(owners);
        }
    }

}