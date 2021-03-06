import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../posts";
import {RestService} from "../rest.service";
import {Router} from "@angular/router";
import {DatePipe, registerLocaleData} from "@angular/common";
import {dateType} from "aws-sdk/clients/iam";
import {FormControl, FormGroup} from "@angular/forms";
import localeTr from "@angular/common/locales/tr"
import {NgForm} from "@angular/forms";
import {stringify} from "querystring";

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {


  isLoading = false;

  PostArray2: Array<PostModel> = []

  i: number = 0;

  loading = false;
  sellersPermitFile: any;
  ExteriorPicFile: any;
  sellersPermitString?: string;

  ExteriorPicString?: string;
  //json
  finalJson = {};


  currentId: number = 0;

  post: PostModel = new PostModel();

  mod?: string;
  tarih: any;


  constructor(private http: HttpClient, private restService: RestService, private route: Router) { }


  imgng: any;
  texttng: any;
  formbuton = "Kaydet";
  image: any;
  imageng: any;
  postdate: any;
  titleng: any;


  ngOnInit(): void {
    this.restService.changemod(0,"Post Form")


    let tarih=new Date()
    this.postdate = new DatePipe('en-US').transform(tarih,'yyyy-MM-ddThh:mm:ss')








    // console.log("tarih==", this.postdate)
    registerLocaleData(localeTr, 'tr-TR');

    this.restService.getss().subscribe(response => {
      this.PostArray2 = response;
      if (this.mod == 'Güncelle') {
        this.postdate = (this.PostArray2[this.i].date)
        this.titleng = (this.PostArray2[this.i].title)


        this.image = (this.PostArray2[this.i].img)
        this.imgng = (this.PostArray2[this.i].img)
        this.texttng = (this.PostArray2[this.i].text)
        this.formbuton = "Güncelle";

      }
    })


    this.restService.getindex().subscribe(index => {
      this.i = index;
    })

    this.restService.getmod().subscribe(a => {
      this.mod = a;
    })

  }

  addPerson(): void {

    this.finalJson = {
      sellersPermitFile: this.ExteriorPicString,
    };
// this.route.navigateByUrl("/")
    this.post.img = "data:image/png;base64," + this.sellersPermitString
    this.post.text = this.texttng
    this.post.title = this.titleng


    const dateSendingToServer = new DatePipe('en-US').transform(this.postdate, 'yyyy-MM-ddThh:mm:ss')
    if (dateSendingToServer != null) {
      this.post.date = dateSendingToServer
    }



    if (this.formSubmitted == false) {


      if (this.post) {

        this.restService.addPerson(this.post)
          .subscribe((data: any) => {

this.route.navigateByUrl('admin/Post/posttable')
            let dataa = data;
            console.log("data=", data)
            if (dataa.token) {
              this.loading = false;
              console.log("data=", data)
// window.location.href='/'
            } else {
              this.loading = false;
            }
            console.log(data)
          }, error => this.loading = false)

      }
    }

  }


  public picked(event: any, field: any) {

    const formData = new FormData();
    formData.append("file", event.target["files"][0]);

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

  handleInputChange(files: any) {


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

  _handleReaderLoaded(e: any) {

    let reader = e.target;
    let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    switch (id) {
      case 1:
        this.sellersPermitString = base64result;
        break;

    }
    this.image = "data:image/png;base64," + this.sellersPermitString
  }



  guncelle(): void {
    console.log("=========", this.post.img)
    let postid = parseInt(String(this.PostArray2[this.i].id));

    this.post.img = "data:image/png;base64," + this.sellersPermitString

    if (this.post.img == 'data:image/png;base64,undefined') {
      this.sellersPermitString = (this.PostArray2[this.i].img)
      this.post.img = (this.PostArray2[this.i].img)

    }

    this.post.title = this.titleng
    this.post.text = this.texttng
    this.post.date = this.postdate
    this.restService.postdegis(postid, this.post).subscribe(postt => {

    }, error => {
      console.error("post güncelleme sırasında hata ===", error)
    })



  }

  formSubmitted: boolean = false;

  btnclick() {


    if (this.mod == 'Güncelle') {
      this.guncelle()

      this.route.navigateByUrl("admin/Post/posttable")

    } else {

      this.addPerson()


    }
  }


  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.restService.addPerson(this.post);
      this.post = new PostModel();
      form.reset();
      this.formSubmitted = false;
    }

  }

}
