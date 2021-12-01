import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin/admin.component";
import {AdminmoduleRoutingModule} from "./adminmodule-routing.module";
import { HttpClientModule} from "@angular/common/http";
import { AppComponent} from "aws-sdk/clients/resiliencehub";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';

import { AdminfullComponent } from './adminfull/adminfull.component';
import {RouterModule,Routes} from "@angular/router";
import {listLazyRoutes} from "@angular/compiler/src/aot/lazy_routes";
import {SliderformComponent} from "./sliderform/sliderform.component";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SliderTable} from "./SliderTable/table.component";
import { PostTableComponent } from './post-table/post-table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';




@NgModule({
  declarations: [
    SidebarComponent,
    BannerComponent,
    SliderTable,
    AdminfullComponent,
    SliderformComponent,
    PostTableComponent,
    SpinnerComponent,
    MenuListItemComponent,




  ],

  exports: [
    SidebarComponent,
    BannerComponent,
    SliderTable,
    SliderformComponent,
    SpinnerComponent
  ],


  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class AdminmoduleModule { }
