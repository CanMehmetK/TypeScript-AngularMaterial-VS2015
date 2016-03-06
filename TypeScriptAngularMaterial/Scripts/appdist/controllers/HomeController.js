var TSAMApp;
(function (TSAMApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(ILService) {
                this.ILService = ILService;
                this.message = "Selam";
                var controller = this;
                ILService.getValues().then(function (data) {
                    console.log(data);
                });
            }
            HomeController.$inject = ['ILService'];
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = TSAMApp.Controllers || (TSAMApp.Controllers = {}));
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=HomeController.js.map