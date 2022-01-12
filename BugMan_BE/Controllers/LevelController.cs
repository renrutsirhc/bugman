using BugMan_BE.Database;
using BugMan_BE.Models;
using Microsoft.AspNetCore.Mvc;

namespace BugMan_BE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LevelController : ControllerBase
    {
        private readonly ILogger<LevelController> _logger;

        public LevelController(ILogger<LevelController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetLevel")]
        public ActionResult<Level> Get([FromQuery(Name = "level")] int levelNumber)
        {
            //from query is used to specify the query string component name
            return DBAccess.getLevel(levelNumber);

        }
    }
}
