import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {slidersModule} from "./sliders";
import {BehaviorSubject, observable, Observable, of} from "rxjs";
import {PostModel} from "./posts";
import {ValidatorFn, AbstractControl, FormControl, Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import * as AWS from "aws-sdk";
import {catchError, map} from "rxjs/operators";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavigationEnd, Router,Event} from "@angular/router";
import {any} from "codelyzer/util/function";
import {sortTasksByPriority} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";
import {DatePipe} from "@angular/common";


@Injectable({
  providedIn: 'root'
})
export class RestService {
  public degis:BehaviorSubject<number>=new BehaviorSubject<number>(1)

  public index:BehaviorSubject<number>=new BehaviorSubject<number>(0)

  public mod:BehaviorSubject<string> = new BehaviorSubject("")


  public currentURL = new BehaviorSubject<any>(undefined);

  baseURL: string = "http://localhost:3000";
  progress: any;
  sliderURL: string="http://localhost:3000/Sliders"
  postURL:string="http://localhost:3000/Posts"
  imgFile?: string;
  id?:number

  public appDrawer:any;
  private PostModel:Array<PostModel> = []
  datePipe: DatePipe = new DatePipe('tr-TR');
  constructor(private http: HttpClient,private router:Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentURL.next(event.urlAfterRedirects);
      }
    });
  }

  URL: string = 'http://localhost:3000/Sliders';
  img: string = "http://localhost:3000/Posts";
  myDate = new Date()

imgg:Array<PostModel>=[]

  postarray:Array<PostModel>=[]

  getimg() {
    return this.http.get<PostModel[]>(this.img).pipe(map((data)=>{
      data.sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      })

      return data
    }))


  //  this.http.get<PostModel[]>(this.img).subscribe((images)=>{
  //
  //   this.postarray=images
  //
  //   this.postarray.sort((a, b) => {
  //     return <any>new Date(b.date) - <any>new Date(a.date);
  //
  // })
  //
  //
  //    console.log("asfasdfa===",this.postarray)
  //
  //
  //
  //   });
  //   console.log("asdhkjfashdkjfss",this.postarray)
  //   return of(this.postarray)
  }

// gett(){
//   return this.postarray;
// }

  getss(){
   return this.http.get<PostModel[]>(this.img)
  }




  getslider() {
    return this.http.get<slidersModule[]>(this.URL)
  }




  addSlider(slider: slidersModule): Observable<any> {

    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(slider);

    //console.log("Osman=", body)
    console.log("upload succesfully")
    return this.http.post(this.baseURL + "/Sliders", body, {'headers': headers})


  }

  addPerson(posts: slidersModule): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(posts);
    //console.log("Osman=", body)
    return this.http.post(this.baseURL + "/Posts", body, {'headers': headers})

  }

  deleteslider(sliderid:number):Observable<any>{

return this.http.delete<number>(`${this.sliderURL}/${sliderid}`)

  }

  deletepost(postid:number):Observable<any>{
    return this.http.delete<number>(`${this.postURL}/${postid}`)
  }



  getmod():Observable<string>{
    return this.mod.asObservable();

  }

  changemod(i:number,mod:string) {
    this.mod.next(mod);
    this.degis.next(i);
  }
   getindex(){
    return this.degis.asObservable();
}

postdegis(postid:number,posts: PostModel): Observable<any>{
  //const body = JSON.stringify(posts);
   return this.http.put<PostModel>(`${this.postURL}/${postid}`,posts)

}
indexal(i:number){
    this.index.next(i)
}
indexget(){
    return this.index.asObservable()
}

}

