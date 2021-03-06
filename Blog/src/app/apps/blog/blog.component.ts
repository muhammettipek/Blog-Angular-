import {Component, OnInit} from '@angular/core';
import {Blog} from './blog-type';
import {ServiceblogService} from './blog-service.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../../Admin/rest.service";
import {slidersModule} from "../../Admin/sliders";
import {PostModel} from "../../Admin/posts";
import {DatePipe, registerLocaleData} from "@angular/common";
import localeTr from "@angular/common/locales/tr"
import {log} from "util";
import {any} from "codelyzer/util/function";

class sortslider {
  id?: number;
  URL?: string;
  date?:string|null;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];
  datePipe: DatePipe = new DatePipe('tr-TR');
  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient,
    private rs:RestService
  ) {
    this.service.showEdit = false;
  }

  imgind=["id","img","text","date"];
  images:PostModel[]=[];


  index=["id","URL"];
  sliders:slidersModule[]=[];
  tarih:any;
  array1:Array<slidersModule>=[]
  mydate=new Date()


  ngOnInit(): void {
    registerLocaleData(localeTr, 'tr-TR');

this.rs.getss().subscribe(
  (response)=>{
    this.images=response;


  },
  (error)=>{
    console.log("errorimg ==",error)
  }
)


    this.rs.getslider().subscribe(
      (response)=>{

        this.sliderarray=response;
      },
      (error)=>{
        console.log("error:",error)
      }
    )

    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }
  indexigonder(i:number){

    this.rs.indexal(i)
    console.log("i==",i)
  }

  sortData() {

     this.images.sort((a, b) => {


       return <any>new Date(b.date!) - <any>new Date(a.date!);

      })
    return this.images.filter((a) => {

  return <any>new Date(a.date) < <any>new Date(this.dater!)


})
  }

sliderarray:Array<sortslider>=[]

 get sortslider() {
    console.log("adfasd")
    return this.sliderarray.sort((a, b) => {

      return <any>new Date(b.date!) - <any>new Date(a.date!);

    });
  }

 get dater(){

    let myDate = new Date()
   return this.datePipe.transform(myDate, 'yyyy-MM-ddThh:mm:ss')

  }


}
