import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from 'src/app/core/guards/auth-admin.guard';
import { AddPrimeOffersComponent } from './components/add-prime-offers/add-prime-offers.component';
import { AddShowsComponent } from './components/add-shows/add-shows.component';

const routes: Routes = [
  {
    path: 'add-show', component: AddShowsComponent, canActivate: [AuthAdminGuard]
  },
  {
    path: 'add-prime-offers', component: AddPrimeOffersComponent, canActivate: [AuthAdminGuard]
  },
  {
    path: '**',
    redirectTo: 'shows'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
