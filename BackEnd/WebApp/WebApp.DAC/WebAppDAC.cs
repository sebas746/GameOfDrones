using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Domain.DataContext.WebApp;
using WebApp.Domain.Interfaces.DAC;

namespace WebApp.DAC
{
    public class WebAppDAC : IWebAppDAC
    {
        public List<GameStatistics> GetAll()
        {
            using (WebAppDataContext db = new WebAppDataContext())
            {
                return db.GameStatistics.ToList();
            }
        }

        public int InsertGameStatistics(GameStatistics gameStatistics)
        {
            using (WebAppDataContext db = new WebAppDataContext())
            {
                db.GameStatistics.Add(gameStatistics);
                var result = db.SaveChanges();
                return result;
            }
        }
    }
}
