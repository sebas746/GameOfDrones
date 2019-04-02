using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApp.Domain.DataContext.WebApp
{
    public partial class WebAppDataContext : DbContext
    {
        public WebAppDataContext()
            : base("name=WebAppDataContext")
        {
        }

        public virtual DbSet<GameStatistics> GameStatistics { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GameStatistics>()
               .Property(e => e.Player1Name)
               .IsUnicode(false);
        }
    }
}
