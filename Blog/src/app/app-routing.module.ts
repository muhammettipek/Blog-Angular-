import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostformComponent} from "./postform/postform.component";
import {SliderformComponent} from "./sliderform/sliderform.component";
import {AdminComponent} from "./Admin/admin/admin.component";



const routes: Routes = [
  {

    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {path:"postform",component:PostformComponent},
      {path:"sliderform",component:SliderformComponent},
    ]
  },
  {
    path:'',
    children:[
      {path:"",loadChildren: () => import('src/app/Admin/adminmodule.module').then(m => m.AdminmoduleModule)},
      {path:"admin",component:AdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
