import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponentComponent } from "./components/nav-component/nav-component.component";
import { HomeComponent } from "./components/home/home.component";
import { TecnicoListComponent } from "./components/tecnico/tecnico-list/tecnico-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { TecnicoCreateComponent } from "./components/tecnico/tecnico-create/tecnico-create.component";
import { TecnicoUpdateComponent } from "./components/tecnico/tecnico-update/tecnico-update.component";
import { TecnicoDeleteComponent } from "./components/tecnico/tecnico-delete/tecnico-delete.component";
import { ClienteListComponent } from "./components/cliente/tecnico-list/cliente-list.component";
import { ClienteCreateComponent } from "./components/cliente/tecnico-create/cliente-create.component";
import { ClienteUpdateComponent } from "./components/cliente/tecnico-update/cliente-update.component";
import { ClienteDeleteComponent } from "./components/cliente/tecnico-delete/cliente-delete.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponentComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'tecnicos', component: TecnicoListComponent },
      { path: 'tecnicos/create', component: TecnicoCreateComponent },
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/create', component: ClienteCreateComponent },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
