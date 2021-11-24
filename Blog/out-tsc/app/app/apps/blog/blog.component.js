import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogComponent = class BlogComponent {
    constructor(service, router, http, rs) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.rs = rs;
        this.blogsDetail = [];
        this.imgind = ["id", "img", "text"];
        this.images = [];
        this.index = ["id", "Order", "URL"];
        this.sliders = [];
        this.service.showEdit = false;
    }
    ngOnInit() {
        this.rs.getimg().subscribe((response) => {
            this.images = response;
        }, (error) => {
            console.log("errorimg ==", error);
        });
        this.rs.getslider().subscribe((response) => {
            this.sliders = response;
        }, (error) => {
            console.log("error:", error);
        });
        if (this.service.Blogs.length === 0)
            this.service.getBlog().subscribe((d) => (this.service.Blogs = d));
    }
    loginClick() {
        this.router.navigate(['/login']);
    }
    newPost() {
        this.router.navigate(['/post']);
    }
    viewDetail(id) {
        this.service.detailId = id;
        if (this.service.loginStatusService)
            this.service.showEdit = true;
        this.router.navigate(['/blogDetail', id]);
    }
};
BlogComponent = __decorate([
    Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        styleUrls: ['./blog.component.css'],
    })
], BlogComponent);
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map