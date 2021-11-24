import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgModel} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SliderformComponent } from './sliderform/sliderform.component';
import { PostformComponent } from './postform/postform.component';
import { AdminpanelformComponent } from './apps/adminpanelform/adminpanelform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({

  declarations: [
    AppComponent,
    SliderformComponent,
    PostformComponent,
    AdminpanelformComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule.forRoot(),
        BrowserAnimationsModule,
        MatProgressSpinnerModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
