import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponentComponent } from "./components/nav-component/nav-component.component";
import { HomeComponent } from "./components/home/home.component";
import { TecnicoListComponent } from "./components/tecnico/tecnico-list/tecnico-list.component";

const routes: Routes = [
  {
    path: '', component: NavComponentComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'tecnicos', component: TecnicoListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
