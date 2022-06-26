import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddShowsComponent } from './components/add-shows/add-shows.component';
import { AddPrimeOffersComponent } from './components/add-prime-offers/add-prime-offers.component';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  AddShowsComponent,
  AddPrimeOffersComponent,
  AdminMainPageComponent
]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule
  ]
})
export class AdminModule { }
