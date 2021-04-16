import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from './core-layout/core-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: CoreLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
