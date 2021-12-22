import {Component, HostListener, Inject} from '@angular/core';
import {SpinnerService} from "./loader/spinner.service";
import {HttpClient} from "@angular/common/http";
import {RestService} from "./Admin/rest.service";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';
  constructor(private http: HttpClient) { }

}

