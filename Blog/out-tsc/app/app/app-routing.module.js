import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostformComponent } from "./postform/postform.component";
import { SliderformComponent } from "./sliderform/sliderform.component";
const routes = [
    {
        path: '',
        children: [
            // { path: '', redirectTo: '/apps', pathMatch: 'full' },
            { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
            { path: "postform", component: PostformComponent },
            { path: "sliderform", component: SliderformComponent }
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map