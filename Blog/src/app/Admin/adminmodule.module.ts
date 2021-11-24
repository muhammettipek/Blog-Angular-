import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin/admin.component";
import {AdminmoduleRoutingModule} from "./adminmodule-routing.module";
import {AppsRoutingModule} from "../apps/apps-routing.module";
import { HttpClientModule} from "@angular/common/http";
import { AppComponent} from "aws-sdk/clients/resiliencehub";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { TableComponent } from './table/table.component';

import { AdminmoduleComponent} from "./adminmodule.component";
import { AdminfullComponent } from './adminfull/adminfull.component';
import {RouterModule,Routes} from "@angular/router";
import {listLazyRoutes} from "@angular/compiler/src/aot/lazy_routes";

@NgModule({
  declarations: [
    SidebarComponent,
    BannerComponent,
    TableComponent,
    AdminfullComponent,],

  exports: [
    SidebarComponent,
    BannerComponent,
    TableComponent
  ],


  imports: [
    CommonModule,
    AppsRoutingModule,
    AdminmoduleRoutingModule,
  ]
})
export class AdminmoduleModule { }
