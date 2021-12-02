import {Component, OnInit} from '@angular/core';
import {RestService} from "../rest.service";
import {slidersModule} from "../sliders";
import {any} from "codelyzer/util/function";
import {chunkByNumber} from "ngx-bootstrap/carousel/utils";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class SliderTable implements OnInit {

  SliderArray: Array<slidersModule> = []

  i: number = 0;
  id?: number;
  private sliderid?: number;


  constructor(private reservice: RestService) {
  }

  ngOnInit(): void {
    this.reservice.changemod(this.i,"Slider Table")

    this.reservice.getslider().subscribe(
      (response) => {
        this.SliderArray = response;

      },
      (error) => {
        console.log("error:", error)
      }
    )
  }

  deleteslider(i: number) {


    let sliderid = parseInt(String(this.SliderArray[i].id));

    console.log("sliderid==", sliderid)
    console.log("slideridvalue tipi   =", typeof parseInt(String(this.SliderArray[this.i].id)))


    this.reservice.deleteslider(sliderid).subscribe(
      () => {
        this.SliderArray.splice(i, 1)
      },error => {
        console.log("error:",error)
      }
    )

  }

}
