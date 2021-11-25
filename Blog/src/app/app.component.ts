import { Component } from '@angular/core';
import {SpinnerService} from "./loader/spinner.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';
  constructor(private http: HttpClient) { }
}
