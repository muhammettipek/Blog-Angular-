import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RestService} from "../rest.service";
import {slidersModule} from "../sliders";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {PostModel} from "../posts";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-sliderform',
  templateUrl: './sliderform.component.html',
  styleUrls: ['./sliderform.component.css']
})
export class SliderformComponent implements OnInit {

  imageSrc?: any;
  sellersPermitFile: any;
  ExteriorPicFile: any;

  sellersPermitString?: string;

  ExteriorPicString?: string;
  //json
  finalJson = {};

  currentId: number = 0;


  slider = new slidersModule();

  constructor(private http: HttpClient, private restService: RestService, private route: Router) {
  }

  sliderURL: any;
  sliderid: any;
  model: any;
  base64Output ?: string;
  loading = false;


  ngOnInit(): void {
    let tarih=new Date()
    this.sliderdate = new DatePipe('en-US').transform(tarih,'yyyy-MM-ddThh:mm:ss')


    this.restService.changemod(0, "Slider Form")
  }

  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  // }

  // formsubmitted: boolean = false;

  // submitForm(form:NgForm){
  //   this.formsubmitted = true ;
  //   if(form.valid){
  //     this.addSlider(this.slider);
  //   }
  // }

  // getValidationErrors(state: any) {
  //   let ctrlName: string = state.id;
  //   let messages: string[] = []
  //   if (state.errors) {
  //     for (let errorName in state.errors) {
  //       switch (errorName) {
  //         case "required":
  //           messages.push(`you must enter ${ctrlName}`);
  //           break;
  //       }
  //     }
  //   }return messages
  // }
  addSlider() {
    this.finalJson = {
      sellersPermitFile: this.ExteriorPicString,
    };
    this.slider.URL = "data:image/png;base64," + this.sellersPermitString
    const sliderdatesending = new DatePipe('en-US').transform(this.sliderdate, 'M d, y, hh:mm:ss ')
    this.slider.date =  sliderdatesending

    if (this.slider) {
      this.loading = true;
      this.restService.addSlider(this.slider)
        .subscribe((data: any) => {
          if(this.formSubmitted==false){
            this.route.navigateByUrl("admin/Slider/slidertable")
          }

          let datta = data
          if (datta.token) {
            this.loading = false;
          } else {
            this.loading = false;
          }
          console.log(data)
        }, error => {
          this.loading = false;
          console.log("upload sırasında hata alındı ", error)
        })
    }
  }

  public picked(event: any, field: any) {
    this.currentId = field;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
    } else {
      alert('No file selected');
    }
  }

  handleInputChange(files: any) {
    let file = files;
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    switch (id) {
      case 1:
        this.sellersPermitString = base64result;
        break;
    }

    this.log();
  }

  log() {
    // for debug
    console.log('1', this.sellersPermitString);
    console.log("degistiiiiiiiiiiiiiiii")
  }

  formSubmitted: boolean = false;
  sliderdate: any;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.restService.addPerson(this.slider);
      this.slider = new PostModel();
      form.reset();
      this.formSubmitted = false;
    }
  }
}





