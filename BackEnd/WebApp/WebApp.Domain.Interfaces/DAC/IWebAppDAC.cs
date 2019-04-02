using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Domain.DataContext.WebApp;

namespace WebApp.Domain.Interfaces.DAC
{
    public interface IWebAppDAC
    {
        List<GameStatistics> GetAll();
        int InsertGameStatistics(GameStatistics gameStatistics);
    }
}
