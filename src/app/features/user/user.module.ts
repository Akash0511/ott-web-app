import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { GetPrimeMembershipComponent } from './components/get-prime-membership/get-prime-membership.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  CreateReviewComponent,
  GetPrimeMembershipComponent
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
