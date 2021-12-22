import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {PostModel} from "../../Admin/posts";
import {RestService} from "../../Admin/rest.service";
import localeTr from "@angular/common/locales/tr"
import {DOCUMENT, registerLocaleData} from "@angular/common";
import {error} from "protractor";


@Component({
  selector: 'app-postdetay',
  templateUrl: './postdetay.component.html',
  styleUrls: ['./postdetay.component.css']
})
export class PostdetayComponent implements OnInit {
  imgind = ["id", "img", "text", "date"];

  PostdetayArray: Array<PostModel> = []

  images: Array<PostModel|null>  = [];
  i: number=1
  imgng: any;
  textt: any;
  imgagesrc: any;
  titleng: any
  dateng: any;

  constructor(private rs: RestService) {
  }



  ngOnInit(): void {

    this.rs.indexget().subscribe(response=>{
      this.i=response;
    })


    this.rs.getimg().subscribe(response=>{
      this.PostdetayArray=response

      this.textt=this.PostdetayArray[this.i].text
      this.titleng=this.PostdetayArray[this.i].title
      this.dateng=this.PostdetayArray[this.i].date
      this.imgagesrc=this.PostdetayArray[this.i].img

    })











    registerLocaleData(localeTr, 'tr-TR');

    // this.rs.getss().subscribe(response => {
    //   response.sort((a, b) => {
    //     return <any>new Date(b.date!) - <any>new Date(a.date!);
    //
    //   });
    //   this.PostdetayArray = response;
    //
    //
    //
    //   this.titleng = this.PostdetayArray[this.i].title
    //   this.dateng = this.PostdetayArray[this.i].date
    //
    //
    // })





  }





}
