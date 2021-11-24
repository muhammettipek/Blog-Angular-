import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PostModel } from "../posts";
// class ImageService {
//   constructor(public src: string, public file: File) {}
let PostformComponent = class PostformComponent {
    // selectedFile: ImageSnippet;
    constructor(http, restService) {
        this.http = http;
        this.restService = restService;
        //json
        this.finalJson = {};
        this.currentId = 0;
        this.post = new PostModel();
    }
    ngOnInit() {
    }
    addPerson() {
        this.finalJson = {
            sellersPermitFile: this.ExteriorPicString,
        };
        this.post.id = this.postid;
        this.post.img = "data:image/png;base64," + this.sellersPermitString;
        this.post.text = this.texttng;
        console.log("osman=", this.texttng);
        this.restService.addPerson(this.post)
            .subscribe((data) => {
            console.log(data);
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
PostformComponent = __decorate([
    Component({
        selector: 'app-postform',
        templateUrl: './postform.component.html',
        styleUrls: ['./postform.component.css']
    })
], PostformComponent);
export { PostformComponent };
addPerson();
{
    this.post.id = this.postid;
    this.post.img = this.imgng;
    this.post.text = this.texttng;
    console.log("osman=", this.texttng);
    this.restService.addPerson(this.post)
        .subscribe((data) => {
        console.log(data);
    });
}
//# sourceMappingURL=postform.component.js.map