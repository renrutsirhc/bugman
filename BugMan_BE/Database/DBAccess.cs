using BugMan_BE.Models;
using Microsoft.Data.Sqlite;
using Dapper;
using System.Threading.Tasks;

namespace BugMan_BE.Database
{
    public static class DBAccess
    {
        public static Level getLevel(int levelNumber)
        {
            var parameters = new { LevelNumber = levelNumber };
            var sql = "SELECT levelNumber AS LevelNumber, width AS Width, height AS Height, data AS Data FROM Levels WHERE levelNumber = @LevelNumber;";
            var databaseConfig = new DatabaseConfig();
            using (var connection = new SqliteConnection(databaseConfig.Name))
            {
                var levels = connection.Query<Level>(sql, parameters);
                return levels.FirstOrDefault();
            }
            
        }
    }
}
