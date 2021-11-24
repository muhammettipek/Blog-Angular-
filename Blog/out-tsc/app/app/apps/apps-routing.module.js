import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';
import { PostformComponent } from "../postform/postform.component";
import { SliderformComponent } from "../sliderform/sliderform.component";
const routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', component: BlogComponent },
            { path: 'blogDetail/:id', component: BlogDetailComponent },
            { path: 'about', component: AboutComponent },
            { path: "postform", component: PostformComponent },
            { path: "sliderform", component: SliderformComponent }
        ]
    }
];
let AppsRoutingModule = class AppsRoutingModule {
};
AppsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AppsRoutingModule);
export { AppsRoutingModule };
//# sourceMappingURL=apps-routing.module.js.map