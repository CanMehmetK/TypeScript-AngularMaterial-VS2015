/// <reference path="../_all.ts" />

module TSAMApp {
    export class ListItem {
        constructor(
            public name: string,
            public isComplete: boolean = false) {
        }
    }
}

module TSAMApp.Controllers {
    export interface bolInterface {
        values: any;
    }
    export class bolController implements bolInterface {
        public values: any = {};
        static $inject = ['ILService'];
        message: string = "Selam";
        constructor(private ILService: any) {
            var controller = this;

            ILService.getValues().then((result: any) => {
                console.log(result.data);
                this.values = result.data;
            });
        }
    }
    angular.module('typeScriptApp').directive('bolController', [() => new TSAMApp.Controllers.bolController(TSAMApp.Services.ILService)]);

    export class ToDoListController {
        name: string;
        listItems: ListItem[];

        newItemName: string;

        static $inject = [
            "$scope"
        ];
        constructor(isolateScope: Directives.IToDoListScope) {
            this.name = isolateScope.name;
            this.listItems = [];
        }

        save() {
            if (this.newItemName && this.newItemName.length > 0) {
                var newItem = new ListItem(this.newItemName);
                this.listItems.push(newItem);

                this.newItemName = null;
            }
        }

        toggle(listItem: ListItem): boolean {
            listItem.isComplete = !listItem.isComplete;
            return listItem.isComplete;
        }
    }
}
module TSAMApp.Directives {
    "use strict";

    export interface IToDoListScope {
        name: string
    }

    export function toDoList(): ng.IDirective {
        return {
            restrict: "E",
            scope: {
                namex: '=',
                name: "@"
            },
            controller: Controllers.ToDoListController,
            //controllerAs: "vm",
            template:
            '<div class="toDoList">' +
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
        }
    }
    angular.module('typeScriptApp').directive('toDoList', TSAMApp.Directives.toDoList);


    export class colFilterable implements ng.IDirective {
        restrict = 'A';
        scope = {

            colFilterable: '=',
            filterableKey: '@',
            filterableOptions: '=',
            filterableOptionsArg: '@'
        };
        template = (element, attr) => {
            var options = 'value as value for value in filterableOptions';
            if (attr.filterableOptionsArg)
                options = attr.filterableOptionsArg;
            return '<select  ng-model="filter" ng-options="' + options + '"><option value="">Tümü</option></select>';
        };
        link = ($scope, element, attr) => {
            let key;
            if (attr.filterableKey)
                key = attr.filterableKey;
            else
                key = element.text().toLowerCase().trim();

            element.find('select').bind('change', (event) => {
                if ($scope.filter)
                    $scope.colFilterable[key] = $scope.filter;
                else
                    delete $scope.colFilterable[key];
                $scope.$apply();
            });
        };
    }
    angular.module('typeScriptApp').directive('colFilterable', [() => new TSAMApp.Directives.colFilterable()]);



    export class bolSelect implements ng.IDirective {
        controller: Controllers.bolController;
        controllerAs = 'ctrl';
        restrict = 'E';
        scope = {
            values: '=',
            colFilterable: '=',
            filterableKey: '@',
            filterableOptions: '=',
            filterableOptionsArg: '@'
        };
        template = (element, attr) => {
            //console.log(this.controller.values);
            var template = '<md-select  ng-model="filter" aria-label="">'
            if (attr.tumuGoster)
                template += '<md-option value="">Tümü</md-option>';
            template += '<md-option ng-repeat="state in values" value="{{state}}">{{state}}</md-option></md-select>';
            return template;
        };
        link = ($scope, element, attr) => {
            let key;
            if (attr.filterableKey)
                key = attr.filterableKey;
            else
                key = element.text().toLowerCase().trim();

            element.find('select').bind('change', (event) => {
                if ($scope.filter)
                    $scope.colFilterable[key] = $scope.filter;
                else
                    delete $scope.colFilterable[key];
                $scope.$apply();
            });
        };
    }
    angular.module('typeScriptApp').directive('bolSelect', [() => new TSAMApp.Directives.bolSelect()]);



    //export class ngSparkline implements ng.IDirective {
    //    public link: (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) => {

    //    };
    //    public template: string = '<div>{{ctrl.values}}</div><md-button>-</md-button><md-button>+</md-button>';
    //    public scope = {
    //        "values": "@",
    //    };
        
    //    // public restrict: string = 'EA';
    //    public controllerAs = 'ctrl'
    //    constructor() {
    //        console.log(this.scope);
    //    }


    //}
    //angular.module('typeScriptApp').directive('ngSparkline', [() => new TSAMApp.Directives.ngSparkline()]);
}
