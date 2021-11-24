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
import { AdminComponent } from './Admin/admin/admin.component';
import {AdminmoduleModule} from "./Admin/adminmodule.module";
import {AppsModule} from "./apps/apps.module";


@NgModule({

    declarations: [
        AppComponent,
        SliderformComponent,
        PostformComponent,
        AdminpanelformComponent,
        AdminComponent,
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
        AdminmoduleModule,
        AppsModule,

    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
