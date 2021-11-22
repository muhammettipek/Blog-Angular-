import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostformComponent} from "./postform/postform.component";
import {SliderformComponent} from "./sliderform/sliderform.component";



const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {path:"postform",component:PostformComponent},
      {path:"sliderform",component:SliderformComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
