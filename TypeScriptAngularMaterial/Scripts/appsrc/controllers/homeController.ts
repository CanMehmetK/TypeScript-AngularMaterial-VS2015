module TSAMApp.Controllers {

    export class HomeController {
        values: any;
        count = 15;
        count1 = 15;
        sonuc = "boş";
        
        static $inject = ['ILService'];
        message: string = "Selam";
        constructor(private ILService: TSAMApp.Services.ILService) {
            var controller = this;
            
            ILService.getValues().then((result: any) => {
                console.log(result.data);
                this.values= result.data;
            });
        }

        filter = "";
        query = {};
        types = ["Test", "Demo", "Numeric", "ABC"];
        items = [{ typ: "Test" }, { typ: "Test" }, { typ: "Demo" }, { typ: "Numeric" }];
    }
} 