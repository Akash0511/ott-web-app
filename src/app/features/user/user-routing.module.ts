import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { GetPrimeMembershipComponent } from './components/get-prime-membership/get-prime-membership.component';
import { MyFavouriteShowsComponent } from './components/my-favourite-shows/my-favourite-shows.component';
import { MyWatchedShowsComponent } from './components/my-watched-shows/my-watched-shows.component';
import { MyFavouriteShowsResolver } from './resolvers/my-favourite-shows/my-favourite-shows.resolver';
import { MyWatchedShowsResolver } from './resolvers/my-watched-shows/my-watched-shows.resolver';
import { GetPrimeOffersResolver } from './resolvers/prime-offers/get-prime-offers.resolver';

const routes: Routes = [
  {
    path: 'get-prime', component: GetPrimeMembershipComponent, canActivate: [AuthGuard],
    resolve: {
      primeOffersList: GetPrimeOffersResolver
    }
  },
  {
    path: 'my-favourites', component: MyFavouriteShowsComponent, canActivate: [AuthGuard],
    resolve: {
      myFavShowsList: MyFavouriteShowsResolver
    }
  },
  {
    path: 'my-watched', component: MyWatchedShowsComponent, canActivate: [AuthGuard],
    resolve: {
      myWatchedShowsList: MyWatchedShowsResolver
    }
  },
  {
    path: '**',
    redirectTo: 'shows'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
