import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BlogComponent} from "../apps/blog/blog.component";

import{FullComponent} from "../apps/layout/full/full.component";
import {PostformComponent} from "../postform/postform.component";
import {SliderformComponent} from "../sliderform/sliderform.component";
import {BlogDetailComponent} from "../apps/blog/blog-detail/blog-detail.component";
import {AboutComponent} from "../apps/about/about.component";
import {AdminComponent} from "./admin/admin.component";
import {TableComponent} from "./table/table.component";
import {AdminmoduleComponent} from "./adminmodule.component";
import {AdminfullComponent} from "./adminfull/adminfull.component";
import {SidebarComponent} from "./sidebar/sidebar.component";




const routes: Routes = [

  {
    path: '',
    component: AdminfullComponent,
    children: [
      { path:'', component: AdminComponent },
      { path:'admin/table',component:TableComponent},
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes),
 ],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
