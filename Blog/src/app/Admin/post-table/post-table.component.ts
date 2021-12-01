import { Component, OnInit } from '@angular/core';
import {PostModel} from "../posts";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  i: number = 0;

  PostArray: Array<PostModel>=[]
  constructor(private restservice:RestService) { }

  ngOnInit(): void {
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
}
