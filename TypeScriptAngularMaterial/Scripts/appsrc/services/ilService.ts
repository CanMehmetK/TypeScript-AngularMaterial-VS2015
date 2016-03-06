/// <reference path="../_all.ts" />

module TSAMApp.Services {

    export class ILService {
        private url = "/api/Values";
        static $inject = ['$q', '$http'];
        constructor(
            private $q: ng.IQService,
            private $http: ng.IHttpService, 
            WEBAPIURL) {
            var service = this;
            service.url =  'http://localhost:39001' + service.url;

        }
        public getValues = () => this.$http.get<any>(this.url);

    }
}

