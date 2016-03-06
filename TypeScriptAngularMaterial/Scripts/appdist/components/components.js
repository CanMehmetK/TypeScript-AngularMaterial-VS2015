/// <reference path="../_all.ts" />
var TSAMApp;
(function (TSAMApp) {
    var Components;
    (function (Components) {
        function counter() {
            return {
                bindings: {
                    count: '=',
                    count1: '='
                },
                controller: function ($mdDialog, $mdMedia, $scope) {
                    console.log(this.count1);
                    function increment() { this.count++; }
                    function decrement() { this.count--; }
                    function showAlert(ev, $ctrl) {
                        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
                        $mdDialog.show({
                            controller: function ($scope, $mdDialog) {
                                console.log();
                                $scope.hide = function () {
                                    $mdDialog.hide();
                                };
                                $scope.cancel = function () {
                                    console.log("cancel--<<<<");
                                    $mdDialog.cancel();
                                };
                                $scope.answer = function (answer) {
                                    console.log("-->" + answer + "---<<<<<");
                                    console.log($ctrl);
                                    $ctrl.count1 = answer;
                                    $mdDialog.hide(answer);
                                };
                            },
                            preserveScope: true,
                            scope: $scope,
                            template: '<md-dialog aria-label="Mango (Fruit)"  ng-cloak>' +
                                '<form>                                                                                     ' +
                                '<md-toolbar>' +
                                '<div class="md-toolbar-tools"><h2>Mango (Fruit)</h2><span flex></span>' +
                                '<md-button class="md-icon-button" ng-click="cancel()"><md-icon md-svg-src="/content/svg/ic_close_24px.svg" aria-label="Close dialog"></md-icon></md-button>' +
                                '</div>                                                                                     ' +
                                '</md-toolbar>                                                                              ' +
                                '<md-dialog-content>Content</md-dialog-content>                                             ' +
                                '<md-dialog-actions layout="row">                                                           ' +
                                //   '<md-button href="http://en.wikipedia.org/wiki/Mango" target="_blank" md-autofocus>Wikipedia </md-button>' +
                                '<span flex></span>                                                                         ' +
                                '<md-button ng-click="answer(1);">Not Useful</md-button>                  ' +
                                '<md-button ng-click="answer(2)" style="margin-right:20px;">Useful</md-button> ' +
                                '</md-dialog-actions>                                                                       ' +
                                '</form>                                                                                    ' +
                                '</md-dialog>                                                                               ',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose: false,
                        });
                    }
                    ;
                    this.showAlert = showAlert;
                    this.increment = increment;
                    this.decrement = decrement;
                },
                template: function ($element, $attrs) {
                    return [
                        '<input type="text" ng-model="$ctrl.count">',
                        '<md-button class="md-primary md-raised" ng-click="$ctrl.decrement();" flex="100"  flex-gt-md="auto">-</md-button>',
                        '<md-button class="md-primary md-raised" ng-click="$ctrl.increment();" flex="100"  flex-gt-md="auto">+</md-button>',
                        '<md-button class="md-primary md-raised" ng-click="$ctrl.showAlert($event,$ctrl);" flex="100"  flex-gt-md="auto">Alert Dialog</md-button>',
                        '<span ng-model="$ctrl.count1"><span>'
                    ].join('');
                }
            };
        }
        Components.counter = counter;
        angular.module('typeScriptApp').component('counter', counter());
    })(Components = TSAMApp.Components || (TSAMApp.Components = {}));
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=components.js.map