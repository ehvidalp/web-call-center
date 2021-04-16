import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginGuard } from './helpers/login.guard';

export const routes: Routes = [
  {
    path: 'login',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/core/core.module').then((m) => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard],
})
export class AppRoutingModule {}
