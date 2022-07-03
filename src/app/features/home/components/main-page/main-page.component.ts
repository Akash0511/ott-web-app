import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/core/interfaces/show.model';
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

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      this.shows = response.showsList;
    });
  }

}
