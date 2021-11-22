import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../posts";
import {RestService} from "../rest.service";
import {NgModel} from "@angular/forms";

// class ImageService {
//   constructor(public src: string, public file: File) {}


@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  post = new PostModel();
  // selectedFile: ImageSnippet;
  constructor(private http: HttpClient,private restService:RestService) { }


//   processFile(imageInput: any) {
//     const file: File = imageInput.files[0];
//     const reader = new FileReader();
//
//     reader.addEventListener('load', (event: any) => {
//
//       this.selectedFile = new ImageSnippet(event.target.result, file);
//
//       this.imageService.uploadImage(this.selectedFile.file).subscribe(
//         (res) => {
//
//         },
//         (err) => {
//
//         })
//     });
//
//     reader.readAsDataURL(file);
//   }
// }
  postid: any;
  imgng: any;
  texttng: any;


  ngOnInit(): void {


  }

  addPerson() {
    this.post.id=this.postid
    this.post.img=this.imgng
    this.post.text=this.texttng
console.log("osman=",this.texttng)
    this.restService.addPerson(this.post)
      .subscribe((data: any) => {
        console.log(data)
      })
  }
}
