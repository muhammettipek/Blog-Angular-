import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { blogs } from './blog-data';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  public index:BehaviorSubject<number>=new BehaviorSubject<number>(1)


  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;


  constructor(public http: HttpClient) {
  }

  indexal(i:number){
    this.index.next(i);
  }
  indexgetir(){
    return this.index.asObservable()
  }

  public getBlog(): Observable<any> {
    return of(blogs);
  }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

}
