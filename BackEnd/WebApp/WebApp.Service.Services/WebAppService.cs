using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Domain.DataContext.WebApp;
using WebApp.Domain.Interfaces.DAC;
using WebApp.Domain.Interfaces.Service;

namespace WebApp.Service.Services
{
    public class WebAppService : IWebAppService
    {
        private IWebAppDAC _WebAppDAC { get; set; }

        public WebAppService(IWebAppDAC WebAppDAC)
        {
            this._WebAppDAC = WebAppDAC;
        }

        public List<GameStatistics> GetAll()
        {
            return _WebAppDAC.GetAll();
        }

        public int InsertGameStatistics(GameStatistics gameStatistics)
        {
            gameStatistics.TimeStamp = DateTime.Now;
            return _WebAppDAC.InsertGameStatistics(gameStatistics);
        }
    }
}
