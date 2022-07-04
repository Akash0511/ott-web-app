import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/core/interfaces/show.model';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  shows: Show[] = [];
  page = 1;
  total!: number;

  constructor(private readonly route: ActivatedRoute,
    private readonly showService: ShowsService,
    private readonly favShowsService: FavouriteShowsService) { }

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      this.shows = response.showsList;
    });
    this.showService.getShows().subscribe(data => {
      this.shows = data;
    })
  }

}
