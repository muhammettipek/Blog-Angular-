import { Component, OnInit } from '@angular/core';
import {RestService} from "../../rest.service";
import {slidersModule} from "../../sliders";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  SliderArray:Array<slidersModule>=[]




  constructor(private reservice:RestService) { }
  base64Output ?: string;



  ngOnInit(): void {
    this.reservice.getslider().subscribe(
      (response)=>{
        this.SliderArray=response;
      },
      (error)=>{
        console.log("error:",error)
      }
    )
  }

}
