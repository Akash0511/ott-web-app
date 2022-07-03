import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GenerateShowsComponent } from './components/generate-shows/generate-shows.component';
import { ShowsDetailPageComponent } from './components/shows-detail-page/shows-detail-page.component';
import { ImdbRatingComponent } from './components/imdb-rating/imdb-rating.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  ReviewsComponent,
  HomeComponent,
  MainPageComponent,
  GenerateShowsComponent,
  ShowsDetailPageComponent,
  ImdbRatingComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
