import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponentComponent } from "./components/nav-component/nav-component.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '', component: NavComponentComponent, children: [
      { path: 'home', component: HomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
