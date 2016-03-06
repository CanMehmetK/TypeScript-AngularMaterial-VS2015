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
                this.sonuc = "boş";
                this.message = "Selam";
                this.filter = "";
                this.query = {};
                this.types = ["Test", "Demo", "Numeric", "ABC"];
                this.items = [{ typ: "Test" }, { typ: "Test" }, { typ: "Demo" }, { typ: "Numeric" }];
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