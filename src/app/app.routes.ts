import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { NgModule } from '@angular/core';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { AuthGuard } from './all.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: "primeira-pagina",component: PrimeiraPaginaComponent},
    {path: "segunda-pagina",component:SegundaPaginaComponent},
    {path: "", redirectTo:"primeira-pagina",pathMatch:"full"},
    {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent},
    { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
    {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate:[AuthGuard]},
    {path: "login",component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoute { }