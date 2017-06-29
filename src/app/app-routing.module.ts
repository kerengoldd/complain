import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AllComponent} from "./home/all/all.component";
import {BycertainComponent} from "./home/bycertain/bycertain.component";
import {ByuserandtypeComponent} from "./home/byuserandtype/byuserandtype.component";

const appRoutes: Routes =[
    {path:'' , redirectTo:'/all', pathMatch:'full'},
    {path:'all' , component:AllComponent},
    {path:'bycertain' , component:BycertainComponent},
    {path:'byuserandtype' , component:ByuserandtypeComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})

export class AppRouting{

}