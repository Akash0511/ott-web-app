import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/core/interfaces/show.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';

@Component({
  selector: 'app-my-favourite-shows',
  templateUrl: './my-favourite-shows.component.html',
  styleUrls: ['./my-favourite-shows.component.scss']
})
export class MyFavouriteShowsComponent implements OnInit {

  myFavShows!: Show[];

  constructor(private readonly route: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly favShowService: FavouriteShowsService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.myFavShows = data.myFavShowsList;
    });
  }

  removeShowFromMyFavList(showId: string): void {
    this.favShowService.removeFavShow(this.authService.getUserId(), showId).subscribe(data => {
      this.getMyFavShows();
    });
  }

  getMyFavShows(): void {
    this.favShowService.getUserFavouriteShows(this.authService.getUserId()).subscribe(data => {
      this.myFavShows = data;
    });
  }

  viewShowDetailPage(showId: string): void {
    this.router.navigateByUrl('/shows/' + showId);
  }
}
