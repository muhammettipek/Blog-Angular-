import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogDetailComponent = class BlogDetailComponent {
    constructor(activatedRouter, service, router) {
        this.service = service;
        this.router = router;
        this.blogDetail = null;
        this.id = activatedRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    }
    loginClick() {
        this.router.navigate([('/login')]);
    }
    newPost() {
        this.service.showEdit = false;
        this.router.navigate([('/post')]);
    }
    editPost() {
        var _a;
        this.service.showEdit = false;
        this.router.navigate([('/editPost'), (_a = this.blogDetail) === null || _a === void 0 ? void 0 : _a.id]);
    }
};
BlogDetailComponent = __decorate([
    Component({
        selector: 'app-blog-detail',
        templateUrl: './blog-detail.component.html',
        styleUrls: ['./blog-detail.component.css']
    })
], BlogDetailComponent);
export { BlogDetailComponent };
//# sourceMappingURL=blog-detail.component.js.map