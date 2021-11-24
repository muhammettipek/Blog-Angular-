import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RestService = class RestService {
    constructor(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000";
        this.URL = 'http://localhost:3000/Sliders';
        this.img = "http://localhost:3000/Posts";
    }
    getimg() {
        return this.http.get(this.img);
    }
    getslider() {
        return this.http.get(this.URL);
    }
    addSlider(slider) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(slider);
        console.log("Osman=", body);
        console.log("upload succesfully");
        return this.http.post(this.baseURL + "/Sliders", body, { 'headers': headers });
    }
    addPerson(posts) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(posts);
        console.log("Osman=", body);
        return this.http.post(this.baseURL + "/Posts", body, { 'headers': headers });
    }
};
RestService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RestService);
export { RestService };
// export class ImageService {
//
//   constructor(private http: Http) {}
//
//
//   public uploadImage(image: File): Observable<Response> {
//     const formData = new FormData();
//
//     formData.append('image', image);
//
//     return this.http.post('/api/v1/image-upload', formData);
//   }
// }
//# sourceMappingURL=rest.service.js.map