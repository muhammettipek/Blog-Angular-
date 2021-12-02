import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../posts";
import {RestService} from "../rest.service";
import {Router} from "@angular/router";





@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  isLoading = false;

  PostArray2:Array<PostModel>=[]

  i:number=0;

  loading = false;
  sellersPermitFile: any;
  ExteriorPicFile: any;
  sellersPermitString?: string;

  ExteriorPicString?: string;
  //json
  finalJson = {};


  currentId: number = 0;

  post = new PostModel();

  mod?: string;
  constructor(private http: HttpClient,private restService:RestService,private route:Router) {}


  imgng: any;
  texttng: any;
  formbuton ="Kaydet";



  ngOnInit(): void {

    this.restService.getimg().subscribe(response=>{
      this.PostArray2=response;
      this.texttng=(this.PostArray2[this.i].text)


    })

this.restService.getindex().subscribe(index=>{
  this.i=index;
})

this.restService.getmod().subscribe(a=>{
this.mod=a;
})
    if(this.mod=='güncelle'){

      console.log(" init içi if = güncelle ilk satır")
      console.log(" init içi if = güncelle alt stır")
      this.formbuton="güncelle"
      this.guncelle()
    }
  }

  addPerson():void {

    this.finalJson = {
      sellersPermitFile: this.ExteriorPicString,
    };
// this.route.navigateByUrl("/")
    this.post.img="data:image/png;base64,"+this.sellersPermitString
    this.post.text=this.texttng
console.log("osman=",this.texttng)
    if(this.post){
this.loading=true;
    this.restService.addPerson(this.post)
      .subscribe((data: any) => {
        this.route.navigateByUrl("admin/Post/posttable")
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

guncelle(){


  let text = document.getElementById("postformtextarea") as HTMLInputElement

  this.PostArray2[this.i].text = text.value

  console.log("value===",text.value)

}

btnclick(){
    if(this.mod=='güncelle'){
      console.log("sa")
      this.guncelle()
    }
    else{
      this.addPerson()
    }
}


}
