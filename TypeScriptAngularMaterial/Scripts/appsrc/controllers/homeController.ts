module TSAMApp.Controllers {

    export class HomeController {
        values: any;
        count = 15;
        count1 = 15;
        il: any;
        ilce: any;
        static $inject = ['ILService'];

        constructor(
            private ILService: TSAMApp.Services.ILService
        ) {
            var controller = this;

            ILService.getValues().then(
                (result: any) => {
                    console.log(result.data);
                    this.values = result.data;
                }
            );
        }


    }
} 