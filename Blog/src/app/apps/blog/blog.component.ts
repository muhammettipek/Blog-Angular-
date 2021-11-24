import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {RestService} from "../../rest.service";
import {img, slidersModule} from "../../sliders";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];

  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient,
    private rs:RestService
  ) {
    this.service.showEdit = false;
  }

  imgind=["id","img","text"];
  images:img[]=[];


  index=["id","Order","URL"];
  sliders:slidersModule[]=[];

  ngOnInit(): void {
this.rs.getimg().subscribe(
  (response)=>{
    this.images=response;
  },
  (error)=>{
    console.log("errorimg ==",error)
  }
)


    this.rs.getslider().subscribe(
      (response)=>{
        this.sliders=response;
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
}