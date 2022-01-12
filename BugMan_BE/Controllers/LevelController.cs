using BugMan_BE.Database;
using BugMan_BE.Models;
using Microsoft.AspNetCore.Mvc;

namespace BugMan_BE.Controllers
{
    public class LevelController : ControllerBase
    {
        private readonly ILogger<LevelController> _logger;

        public LevelController(ILogger<LevelController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetLevel")]
        public ActionResult<Level> Get(int levelNumber)
        {
            return DBAccess.getLevel(levelNumber);

        }
    }
}
