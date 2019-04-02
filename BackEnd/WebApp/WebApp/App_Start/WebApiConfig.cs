using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Unity;
using Unity.Lifetime;
using WebApp.App_Start;
using WebApp.DAC;
using WebApp.Domain.Interfaces.DAC;
using WebApp.Domain.Interfaces.Service;
using WebApp.Service.Services;
using System.Web.Http.Cors;

namespace WebApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var container = new UnityContainer();
            container.RegisterType<IWebAppService, WebAppService>();
            container.RegisterType<IWebAppDAC, WebAppDAC>();
            config.DependencyResolver = new UnityResolver(container);

            // Configuración y servicios de API web
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));


            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
