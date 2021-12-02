import { Component, OnInit } from '@angular/core';
import {PostModel} from "../posts";
import {RestService} from "../rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  isLoading=false;
  i: number = 0;
mod?:string

  PostArray: Array<PostModel>=[]

  constructor(private restservice:RestService,private route:Router) { }

  ngOnInit(): void {

    this.restservice.changemod(0,"Post Table")


    this.restservice.getimg().subscribe(
      (response)=>{
        this.PostArray=response;
      },
      (error)=>{
        console.log("error:",error)
      }
    )
  }
  deleteslider(i: number) {


    let postid = parseInt(String(this.PostArray[i].id));

    console.log("slideridvalue==", this.PostArray)
    console.log("slideridvalue tipi   =", typeof parseInt(String(this.PostArray[this.i].id)))


    this.restservice.deletepost(postid).subscribe(
      () => {
        this.PostArray.splice(i, 1)
      },error => {
        console.log("error:",error)
      }
    )

  }

  changemod(i:number,mod:string):void{

    this.restservice.changemod(i,mod);
    console.log("mod===",mod)
    console.log("i==",i)
    this.route.navigateByUrl("admin/Post/postform")




  }

}
