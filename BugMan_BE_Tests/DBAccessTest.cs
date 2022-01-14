using BugMan_BE.Database;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BugMan_BE_Tests
{
    [TestClass]
    public class DBAccessTest
    {
        [TestMethod]
        public void TestGetLevel()
        {
            var level = DBAccess.getLevel(1);
            Assert.IsNotNull(level);
            Assert.AreEqual(1, level.LevelNumber);
            Assert.AreEqual(13, level.Width);
        }
    }
}