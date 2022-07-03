import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchShowsComponent } from './components/search-shows/search-shows.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const components = [
  HeaderComponent,
  FooterComponent,
  CategoryComponent,
  SearchShowsComponent,
  MainPageComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    MatSnackBarModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    NgbModule,
  ],
  exports:[
    ReactiveFormsModule,
    TranslateModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    NgbModule,
  ]
})
export class SharedModule { }
