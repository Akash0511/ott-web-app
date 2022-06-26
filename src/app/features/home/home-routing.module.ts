import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShowsDetailPageComponent } from './components/shows-detail-page/shows-detail-page.component';
import { ShowsDetailResolver } from './resolvers/shows-detail/shows-detail.resolver';
import { ShowsResolver } from './resolvers/shows/shows.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
        resolve: {
          showsList: ShowsResolver
        }
      },
      {
        path: 'shows/:showId',
        component: ShowsDetailPageComponent,
        resolve: {
          show: ShowsDetailResolver
        }
      }
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
