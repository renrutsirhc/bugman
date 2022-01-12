namespace BugMan_BE.Models
{
    public class Level
    {
        public Level()
        {

        }
        public Level(int levelNumber, int width, int height, string data)
        {
            _levelNumber = levelNumber;
            _width = width;
            _height = height;
            _data = data;
        }

        private int _levelNumber;

        public int LevelNumber
        {
            get { return _levelNumber; }
            set { _levelNumber = value; }
        }

        private int _width;

        public int Width
        {
            get { return _width; }
            set { _width = value; }
        }

        private int _height;

        public int Height
        {
            get { return _height; }
            set { _height = value; }
        }

        private string _data;

        public string Data
        {
            get { return _data; }
            set { _data = value; }
        }




    }
}
