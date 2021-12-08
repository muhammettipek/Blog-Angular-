import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../Admin/posts";
import {RestService} from "../../Admin/rest.service";
import localeTr from "@angular/common/locales/tr"
import {registerLocaleData} from "@angular/common";

@Component({
  selector: 'app-postdetay',
  templateUrl: './postdetay.component.html',
  styleUrls: ['./postdetay.component.css']
})
export class PostdetayComponent implements OnInit {
  imgind=["id","img","text","date"];

  PostdetayArray: Array<PostModel> = []

  images:PostModel[]=[];
  i:number = 0;
 imgng: any;
  textt: any;
  imgagesrc: any;
titleng:any
  dateng:any;
  constructor(private rs:RestService) { }

  ngOnInit(): void {
    this.rs.indexget().subscribe(response=>
    {
      this.i=response
    })

    registerLocaleData(localeTr, 'tr-TR');

    this.rs.getimg().subscribe(response => {
      this.PostdetayArray = response;

        this.textt=this.PostdetayArray[this.i].text

      this.imgagesrc=this.PostdetayArray[this.i].img
      this.titleng=this.PostdetayArray[this.i].title
this.dateng=this.PostdetayArray[this.i].date

      console.log("text===",this.PostdetayArray[this.i].text)


    })









  }

}
