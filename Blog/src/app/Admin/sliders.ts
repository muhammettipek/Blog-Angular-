import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class img {
  id?: string;
  img?: string;
  text?: string;

  constructor(id: string, img: string, text: string) {
    this.id = id
    this.img = img
    this.text = text
  }
}


export class slidersModule {
  id?: string;
  URL?: string;
}


