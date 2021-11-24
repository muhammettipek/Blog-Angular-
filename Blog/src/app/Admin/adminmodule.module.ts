import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin/admin.component";
import {AdminmoduleRoutingModule} from "./adminmodule-routing.module";
import {AppsRoutingModule} from "../apps/apps-routing.module";
import { HttpClientModule} from "@angular/common/http";
import { AppComponent} from "aws-sdk/clients/resiliencehub";

@NgModule({
  declarations: [
  ],


  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AdminmoduleModule { }
