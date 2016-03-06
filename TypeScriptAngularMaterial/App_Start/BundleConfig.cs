using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace TSAM
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-2.2.1.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularmaterial").Include(
                "~/Scripts/bower_components/angular/angular.min.js",
                "~/Scripts/bower_components/angular-animate/angular-animate.min.js",
                "~/Scripts/bower_components/angular-aria/angular-aria.min.js",
                "~/Scripts/bower_components/angular-material/angular-material.min.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/controllers")
                .IncludeDirectory("~/Scripts/appdist/controllers", "*.js", true));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/appdist/boot.js"
                ));
            // CSS style (bootstrap/kanpinar)
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Scripts/bower_components/angular-material/angular-material.min.css",
                "~/content/css/app.css"));
        }
    }
}