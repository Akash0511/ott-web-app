import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddShowsComponent } from './components/add-shows/add-shows.component';
import { AddPrimeOffersComponent } from './components/add-prime-offers/add-prime-offers.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  AddShowsComponent,
  AddPrimeOffersComponent
]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
