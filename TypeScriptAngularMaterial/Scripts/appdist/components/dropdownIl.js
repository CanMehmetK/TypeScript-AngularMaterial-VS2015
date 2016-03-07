/// <reference path="../_all.ts" />
//https://docs.angularjs.org/guide/component#comparison-between-directive-definition-and-component-definition
//https://docs.angularjs.org/guide/component#intercomponent-communication
var TSAMApp;
(function (TSAMApp) {
    var Components;
    (function (Components) {
        function IlSelectComponent() {
            return {
                bindings: {
                    ngModel: '=',
                    list: '@',
                    ngCascade: '@',
                },
                controller: function (ILService) {
                    var _this = this;
                    ILService.getValues().then(function (result) {
                        _this.list = result.data;
                        console.log(_this.list);
                    });
                    function vmChanged() {
                        console.log(this.isCascaded);
                    }
                    this.vmChanged = vmChanged;
                },
                template: function ($element, $attrs) {
                    console.log($element);
                    if ($element.attr('ng-Cascade')) {
                        console.log($element.attr('ng-Cascade'));
                        this.isCascaded = true;
                    }
                    console.log(this.ngCascade);
                    return [
                        '<md-select ng-model="$ctrl.ngModel" ng-change="$ctrl.vmChanged($ctrl)">',
                        '<md-option ng-repeat="il in $ctrl.list" value="->{{il}}<-"><-{{il}}-></md-option>',
                        '</md-select>'
                    ].join('');
                }
            };
        }
        Components.IlSelectComponent = IlSelectComponent;
        angular.module('typeScriptApp').component('ilSelectComponent', IlSelectComponent());
    })(Components = TSAMApp.Components || (TSAMApp.Components = {}));
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=dropdownIl.js.map