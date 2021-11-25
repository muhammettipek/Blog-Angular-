import { Component, OnInit } from '@angular/core';
import {PostModel} from "../posts";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  PostArray:Array<PostModel>=[]
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

}
