/// <reference path="../_all.ts" />
//https://docs.angularjs.org/guide/component#comparison-between-directive-definition-and-component-definition
//https://docs.angularjs.org/guide/component#intercomponent-communication
module TSAMApp.Components {
    export function IlSelectComponent() {
        return {            
            bindings: {
                ngModel: '=',
                list: '@',
                ngCascade: '@',
            },
            controller: function (ILService: TSAMApp.Services.ILService) {
                isCascaded: false,                
                ILService.getValues().then(
                    (result: any) => {
                        this.list = result.data;
                        console.log(this.list);
                    }
                );
                function vmChanged() {
                    console.log(this.isCascaded);
                }
                this.vmChanged = vmChanged;
            },
            template: function ($element: ng.IAugmentedJQuery, $attrs) {
                console.log($element);
                if ($element.attr('ng-Cascade')) {
                    console.log($element.attr('ng-Cascade'));
                    this.isCascaded = true;
                }
                console.log(this.ngCascade);
                return [
                    '<md-select ng-model="$ctrl.ngModel" ng-change="$ctrl.vmChanged($ctrl)">', //md-on-open="loadUsers()"
                    '<md-option ng-repeat="il in $ctrl.list" value="->{{il}}<-"><-{{il}}-></md-option>',
                    '</md-select>'
                ].join('');
            }
        }
    }
    angular.module('typeScriptApp').component('ilSelectComponent', IlSelectComponent());
}