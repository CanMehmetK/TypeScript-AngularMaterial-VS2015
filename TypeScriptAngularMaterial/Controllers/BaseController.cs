using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TSAM.Controllers
{
    public class BaseController : Controller
    {
        [ChildActionOnly]
        public ActionResult Menu()
        {
            var menuData = new List<string> {
                "/",
            };
            return PartialView("~/Views/Shared/mainMenu.cshtml", menuData);

        }
    }
}