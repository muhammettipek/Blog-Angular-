import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../posts";
import {RestService} from "../rest.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpEvent, HttpEventType,HttpResponse } from '@angular/common/http';
import {MatSpinner} from "@angular/material/progress-spinner";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";


// class ImageService {
//   constructor(public src: string, public file: File) {}


class FileUploadService {
}

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {


  loading = false;
  sellersPermitFile: any;
  ExteriorPicFile: any;
  sellersPermitString?: string;

  ExteriorPicString?: string;
  //json
  finalJson = {};


  currentId: number = 0;

  post = new PostModel();
  // selectedFile: ImageSnippet;
  constructor(private http: HttpClient,private restService:RestService,private route:Router) {}
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

  addPerson():void {

    this.finalJson = {
      sellersPermitFile: this.ExteriorPicString,
    };
// this.route.navigateByUrl("/")
    this.post.id=this.postid
    this.post.img="data:image/png;base64,"+this.sellersPermitString
    this.post.text=this.texttng
console.log("osman=",this.texttng)
    if(this.post){
this.loading=true;
    this.restService.addPerson(this.post)
      .subscribe((data: any) => {
        let dataa = data;
        console.log("data=",data)
         if(dataa.token){
this.loading=false;
console.log("data=",data)
// window.location.href='/'
         }else{
           this.loading=false;
         }
        console.log(data)
      },error => this.loading=false )

  }}
  public picked(event:any, field:any) {
    const formData = new FormData();
    formData.append("file",event.target["files"][0]);

    this.currentId = field;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
    } else {
      alert('No file selected');
    }
  }

  handleInputChange(files:any) {


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
  _handleReaderLoaded(e:any) {
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
    console.log("degistiiiiiiiiiiiiiiii")
  }


}
