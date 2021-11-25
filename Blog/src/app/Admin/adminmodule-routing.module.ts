import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BlogComponent} from "../apps/blog/blog.component";

import{FullComponent} from "../apps/layout/full/full.component";
import {PostformComponent} from "./postform/postform.component";
import {SliderformComponent} from "./sliderform/sliderform.component";
import {BlogDetailComponent} from "../apps/blog/blog-detail/blog-detail.component";
import {AboutComponent} from "../apps/about/about.component";
import {AdminComponent} from "./admin/admin.component";
import {SliderTable} from "./SliderTable/table.component";
import {AdminfullComponent} from "./adminfull/adminfull.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {PostTableComponent} from "./post-table/post-table.component";




const routes: Routes = [

  {
    path: 'admin',
    component: AdminfullComponent,
    children: [
      { path:'slidertable',component:SliderTable},
      { path:'sliderform',component:SliderformComponent},
      { path:'posttable',component:PostTableComponent},
      { path:"postform",component:PostformComponent}
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes),
 ],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
