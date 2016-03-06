module TSAMApp.Controllers {

    export class HomeController {

        static $inject = ['ILService'];
        message: string = "Selam";
        constructor(private ILService: TSAMApp.Services.ILService) {
            var controller = this;
            ILService.getValues().then((data: any) => {
                console.log(data);
            });
        }
    }
} 