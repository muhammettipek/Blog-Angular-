import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./Admin/admin/admin.component";

import {AdminfullComponent} from "./Admin/adminfull/adminfull.component";



const routes: Routes = [
  {

    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
    ]
  },
  {
    path:'',
    children:[
      {path:"",loadChildren: () => import('src/app/Admin/adminmodule.module').then(m => m.AdminmoduleModule)},
      {path:"admin",component:AdminfullComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
