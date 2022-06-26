import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AddPrimeOffersComponent } from './components/add-prime-offers/add-prime-offers.component';
import { AddShowsComponent } from './components/add-shows/add-shows.component';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';

const routes: Routes = [{
  path: 'add',
  component: AdminMainPageComponent,
  children: [
    {
      path: 'movie', component: AddShowsComponent, canActivate: [AuthGuard]
    },
    {
      path: 'prime-package', component: AddPrimeOffersComponent, canActivate: [AuthGuard]
    }
  ],
},
{
  path: '',
  redirectTo: 'add',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
