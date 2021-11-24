import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { blogs } from './blog-data';
let ServiceblogService = class ServiceblogService {
    constructor(http) {
        this.http = http;
        this.Blogs = [];
        this.loginStatusService = false;
        this.detailId = -1;
        this.showEdit = false;
    }
    getBlog() {
        return of(blogs);
    }
    addPost(bl) {
        this.Blogs.splice(0, 0, bl);
    }
    deletePost(id) {
        this.Blogs = this.Blogs.filter(b => b.id !== id);
    }
};
ServiceblogService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServiceblogService);
export { ServiceblogService };
//# sourceMappingURL=blog-service.service.js.map