import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../loader/spinner.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService:SpinnerService) {

  }

  ngOnInit() {
  }
}
