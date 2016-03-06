var TSAMApp;
(function (TSAMApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(ILService) {
                var _this = this;
                this.ILService = ILService;
                this.count = 15;
                this.count1 = 15;
                var controller = this;
                ILService.getValues().then(function (result) {
                    console.log(result.data);
                    _this.values = result.data;
                });
            }
            HomeController.$inject = ['ILService'];
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = TSAMApp.Controllers || (TSAMApp.Controllers = {}));
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=HomeController.js.map