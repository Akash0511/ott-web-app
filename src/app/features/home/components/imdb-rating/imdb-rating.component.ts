import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imdb-rating',
  templateUrl: './imdb-rating.component.html',
  styleUrls: ['./imdb-rating.component.scss']
})
export class ImdbRatingComponent implements OnInit {

  @Input()
  imdbRating!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
