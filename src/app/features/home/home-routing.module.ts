import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShowsDetailPageComponent } from './components/shows-detail-page/shows-detail-page.component';
import { ShowsDetailResolver } from './resolvers/shows-detail/shows-detail.resolver';
import { ShowsResolver } from './resolvers/shows/shows.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: {
      showsList: ShowsResolver
    }
  },
  {
    path: ':showId',
    component: ShowsDetailPageComponent,
    resolve: {
      show: ShowsDetailResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
