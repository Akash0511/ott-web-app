import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/core/interfaces/show-category';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  showCategoryData: Category[] = [];

  @Output()
  showCategory: EventEmitter<any> = new EventEmitter();

  constructor(private readonly showService: ShowsService) {
    this.showService.getAllShowCategories().subscribe(data => {
      this.showCategoryData = data;
    });
  }

  ngOnInit(): void {
  }

  onShowCategorySelected(language: string, selectedCategory: string): void {
    this.showCategory.emit({ language: language, category: selectedCategory });
  }

}
