/// <reference path="../_all.ts" />
var TSAMApp;
(function (TSAMApp) {
    var ListItem = (function () {
        function ListItem(name, isComplete) {
            if (isComplete === void 0) { isComplete = false; }
            this.name = name;
            this.isComplete = isComplete;
        }
        return ListItem;
    })();
    TSAMApp.ListItem = ListItem;
})(TSAMApp || (TSAMApp = {}));
var TSAMApp;
(function (TSAMApp) {
    var Controllers;
    (function (Controllers) {
        var bolController = (function () {
            function bolController(ILService) {
                var _this = this;
                this.ILService = ILService;
                this.values = {};
                this.message = "Selam";
                var controller = this;
                ILService.getValues().then(function (result) {
                    console.log(result.data);
                    _this.values = result.data;
                });
            }
            bolController.$inject = ['ILService'];
            return bolController;
        })();
        Controllers.bolController = bolController;
        angular.module('typeScriptApp').directive('bolController', [function () { return new TSAMApp.Controllers.bolController(TSAMApp.Services.ILService); }]);
        var ToDoListController = (function () {
            function ToDoListController(isolateScope) {
                this.name = isolateScope.name;
                this.listItems = [];
            }
            ToDoListController.prototype.save = function () {
                if (this.newItemName && this.newItemName.length > 0) {
                    var newItem = new TSAMApp.ListItem(this.newItemName);
                    this.listItems.push(newItem);
                    this.newItemName = null;
                }
            };
            ToDoListController.prototype.toggle = function (listItem) {
                listItem.isComplete = !listItem.isComplete;
                return listItem.isComplete;
            };
            ToDoListController.$inject = [
                "$scope"
            ];
            return ToDoListController;
        })();
        Controllers.ToDoListController = ToDoListController;
    })(Controllers = TSAMApp.Controllers || (TSAMApp.Controllers = {}));
})(TSAMApp || (TSAMApp = {}));
var TSAMApp;
(function (TSAMApp) {
    var Directives;
    (function (Directives) {
        "use strict";
        function toDoList() {
            return {
                restrict: "E",
                scope: {
                    namex: '=',
                    name: "@"
                },
                controller: TSAMApp.Controllers.ToDoListController,
                //controllerAs: "vm",
                template: '<div class="toDoList">' +
                    '<h2>{{ vm.name }}</h2>' +
                    '<form ng-submit="save()">' +
                    '    <input type="text" ng-model="newItemName"  placeholder="Task name">' +
                    '    <button type="submit" class="btn btn-default" style="">Add Item</button>' +
                    '</form>' +
                    '<ul>' +
                    '    <li ng-repeat="item in listItems" ng-class="{ complete: item.isComplete }">' +
                    '        <label>' +
                    '            <input type="checkbox" ng-click="toggle(item)" ng-checked="item.isComplete">' +
                    '            {{ item.name }}' +
                    '        </label>' +
                    '    </li>' +
                    '</ul>' +
                    '</div>',
                replace: true
            };
        }
        Directives.toDoList = toDoList;
        angular.module('typeScriptApp').directive('toDoList', TSAMApp.Directives.toDoList);
        var colFilterable = (function () {
            function colFilterable() {
                this.restrict = 'A';
                this.scope = {
                    colFilterable: '=',
                    filterableKey: '@',
                    filterableOptions: '=',
                    filterableOptionsArg: '@'
                };
                this.template = function (element, attr) {
                    var options = 'value as value for value in filterableOptions';
                    if (attr.filterableOptionsArg)
                        options = attr.filterableOptionsArg;
                    return '<select  ng-model="filter" ng-options="' + options + '"><option value="">Tümü</option></select>';
                };
                this.link = function ($scope, element, attr) {
                    var key;
                    if (attr.filterableKey)
                        key = attr.filterableKey;
                    else
                        key = element.text().toLowerCase().trim();
                    element.find('select').bind('change', function (event) {
                        if ($scope.filter)
                            $scope.colFilterable[key] = $scope.filter;
                        else
                            delete $scope.colFilterable[key];
                        $scope.$apply();
                    });
                };
            }
            return colFilterable;
        })();
        Directives.colFilterable = colFilterable;
        angular.module('typeScriptApp').directive('colFilterable', [function () { return new TSAMApp.Directives.colFilterable(); }]);
        var bolSelect = (function () {
            function bolSelect() {
                this.controllerAs = 'ctrl';
                this.restrict = 'E';
                this.scope = {
                    values: '=',
                    colFilterable: '=',
                    filterableKey: '@',
                    filterableOptions: '=',
                    filterableOptionsArg: '@'
                };
                this.template = function (element, attr) {
                    //console.log(this.controller.values);
                    var template = '<md-select  ng-model="filter" aria-label="">';
                    if (attr.tumuGoster)
                        template += '<md-option value="">Tümü</md-option>';
                    template += '<md-option ng-repeat="state in values" value="{{state}}">{{state}}</md-option></md-select>';
                    return template;
                };
                this.link = function ($scope, element, attr) {
                    var key;
                    if (attr.filterableKey)
                        key = attr.filterableKey;
                    else
                        key = element.text().toLowerCase().trim();
                    element.find('select').bind('change', function (event) {
                        if ($scope.filter)
                            $scope.colFilterable[key] = $scope.filter;
                        else
                            delete $scope.colFilterable[key];
                        $scope.$apply();
                    });
                };
            }
            return bolSelect;
        })();
        Directives.bolSelect = bolSelect;
        angular.module('typeScriptApp').directive('bolSelect', [function () { return new TSAMApp.Directives.bolSelect(); }]);
    })(Directives = TSAMApp.Directives || (TSAMApp.Directives = {}));
})(TSAMApp || (TSAMApp = {}));
//# sourceMappingURL=ILDirective.js.map