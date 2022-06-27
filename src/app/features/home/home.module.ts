import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GenerateShowsComponent } from './components/generate-shows/generate-shows.component';
import { ShowsDetailPageComponent } from './components/shows-detail-page/shows-detail-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { ImdbRatingComponent } from './components/imdb-rating/imdb-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    NgbModule,
    TranslateModule
  ]
})
export class HomeModule { }
