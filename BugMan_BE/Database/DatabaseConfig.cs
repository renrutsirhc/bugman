namespace BugMan_BE.Database
{
    public class DatabaseConfig
    {
        public DatabaseConfig()
        {
            Name = "Data Source = .\\BugMan.db; ";
        }
        public string Name { get; set; }
    }
}
