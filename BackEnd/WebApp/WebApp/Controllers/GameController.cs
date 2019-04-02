using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Domain.DataContext.WebApp;
using WebApp.Domain.Interfaces.Service;

namespace WebApp.Controllers
{
    public class GameController : ApiController
    {
        public IWebAppService _WebAppService;

        public GameController(IWebAppService WebAppService)
        {
            this._WebAppService = WebAppService;
        }

        //// GET api/<controller>
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}

        [HttpGet]
        [Route("api/GameController/GetAll/")]
        public IHttpActionResult GetAll()
        {
            var response = _WebAppService.GetAll();
            return Ok(response);
        }

        [HttpPost]
        [Route("api/GameController/InsertGameStatistics/")]
        public IHttpActionResult InsertGameStatistics(GameStatistics gameStatistics)
        {
            var response = _WebAppService.InsertGameStatistics(gameStatistics);
            return Ok(response);
        }
    }
}