import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {img, slidersModule} from "./sliders";
import {Observable} from "rxjs";
import {PostModel} from "./posts";
import {ValidatorFn, AbstractControl, FormControl, Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import * as AWS from "aws-sdk";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseURL: string = "http://localhost:3000";


  imgFile?: string;

  constructor(private http: HttpClient) {
  }

  URL: string = 'http://localhost:3000/Sliders';
  img: string = "http://localhost:3000/Posts";

  getimg() {
    return this.http.get<img[]>(this.img)
  }


  getslider() {
    return this.http.get<slidersModule[]>(this.URL)
  }

  addSlider(slider: slidersModule): Observable<any> {

    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(slider);

    console.log("Osman=", body)
    console.log("upload succesfully")
    return this.http.post(this.baseURL + "/Sliders", body, {'headers': headers})


  }

  addPerson(posts: PostModel): Observable<any> {

    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(posts);
    console.log("Osman=", body)
    return this.http.post(this.baseURL + "/Posts", body, {'headers': headers})
  }


}

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
