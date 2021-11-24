import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AboutComponent = class AboutComponent {
    constructor(service) {
        this.service = service;
        this.service.showEdit = false;
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map