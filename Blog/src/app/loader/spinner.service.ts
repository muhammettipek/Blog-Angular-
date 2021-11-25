import {Injectable} from '@angular/core';
import {BehaviorSubject,Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading = new BehaviorSubject<boolean>(false);
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}

