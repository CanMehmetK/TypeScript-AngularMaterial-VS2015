/// <reference path="_all.ts" />
var TSAMApp;
(function (TSAMApp) {
    angular.module('typeScriptApp', ['ngMaterial'])
        .service(TSAMApp.Services)
        .controller(TSAMApp.Controllers)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('/content/svg/avatars.svg', 128)
            .icon("google_plus", "/content/svg/google_plus.svg", 512)
            .icon("hangouts", "/content/svg/hangouts.svg", 512)
            .icon("twitter", "/content/svg/twitter.svg", 512)
            .icon("phone", "/content/svg/phone.svg", 512)
            .icon('menu', '/content/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    })
        .run(['$rootScope', '$mdSidenav', function ($rootScope, $mdSidenav) {
            $rootScope.toggleSideNav = function () {
                console.log('toggleSideNav');
                $mdSidenav('left').toggle();
            };
        }]);
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=boot.js.map