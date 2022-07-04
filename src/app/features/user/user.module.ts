import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { GetPrimeMembershipComponent } from './components/get-prime-membership/get-prime-membership.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyFavouriteShowsComponent } from './components/my-favourite-shows/my-favourite-shows.component';
import { MyWatchedShowsComponent } from './components/my-watched-shows/my-watched-shows.component';

const components = [
  GetPrimeMembershipComponent,
  MyFavouriteShowsComponent,
  MyWatchedShowsComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
