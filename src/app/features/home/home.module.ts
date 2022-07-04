import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GenerateShowsComponent } from './components/generate-shows/generate-shows.component';
import { ShowsDetailPageComponent } from './components/shows-detail-page/shows-detail-page.component';
import { ImdbRatingComponent } from './components/imdb-rating/imdb-rating.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogContentExampleDialog, WriteReviewComponent } from './components/write-review/write-review.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

const components = [
  ReviewsComponent,
  MainPageComponent,
  GenerateShowsComponent,
  ShowsDetailPageComponent,
  ImdbRatingComponent,
  WriteReviewComponent,
  DialogContentExampleDialog
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatNativeDateModule,
    SharedModule
  ]
})
export class HomeModule { }
