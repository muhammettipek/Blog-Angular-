import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { slidersModule } from "../sliders";
let SliderformComponent = class SliderformComponent {
    constructor(http, restService) {
        this.http = http;
        this.restService = restService;
        //json
        this.finalJson = {};
        this.currentId = 0;
        this.slider = new slidersModule();
    }
    ngOnInit() {
    }
    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }
    // formsubmitted: boolean = false;
    // submitForm(form:NgForm){
    //   this.formsubmitted = true ;
    //   if(form.valid){
    //     this.addSlider(this.slider);
    //   }
    // }
    // getValidationErrors(state: any) {
    //   let ctrlName: string = state.id;
    //   let messages: string[] = []
    //   if (state.errors) {
    //     for (let errorName in state.errors) {
    //       switch (errorName) {
    //         case "required":
    //           messages.push(`you must enter ${ctrlName}`);
    //           break;
    //       }
    //     }
    //   }return messages
    // }
    addSlider() {
        this.finalJson = {
            sellersPermitFile: this.ExteriorPicString,
        };
        this.slider.id = this.sliderid;
        this.slider.URL = "data:image/png;base64," + this.sellersPermitString;
        this.restService.addSlider(this.slider)
            .subscribe((data) => {
            console.log(data);
            console.log('upload başarılı');
        }, error => {
            console.log("upload sırasında hata alındı ", error);
        });
    }
    picked(event, field) {
        this.currentId = field;
        let fileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
            if (field == 1) {
                this.sellersPermitFile = file;
                this.handleInputChange(file); //turn into base64
            }
        }
        else {
            alert('No file selected');
        }
    }
    handleInputChange(files) {
        let file = files;
        let pattern = /image-*/;
        let reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onloadend = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
        //this.imageSrc = base64result;
        let id = this.currentId;
        switch (id) {
            case 1:
                this.sellersPermitString = base64result;
                break;
        }
        this.log();
    }
    log() {
        // for debug
        console.log('1', this.sellersPermitString);
        console.log("degistiiiiiiiiiiiiiiii");
    }
};
SliderformComponent = __decorate([
    Component({
        selector: 'app-sliderform',
        templateUrl: './sliderform.component.html',
        styleUrls: ['./sliderform.component.css']
    })
], SliderformComponent);
export { SliderformComponent };
//# sourceMappingURL=sliderform.component.js.map