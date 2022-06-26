import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchShowsComponent } from './components/search-shows/search-shows.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    SearchShowsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
