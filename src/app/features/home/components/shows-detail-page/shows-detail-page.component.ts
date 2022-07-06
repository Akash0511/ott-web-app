import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FavouriteShows } from 'src/app/core/interfaces/favourite.model';
import { Show } from 'src/app/core/interfaces/show.model';
import { StateData } from 'src/app/core/interfaces/state-data.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';
import { MaintainStateService } from 'src/app/core/services/maintain-state/maintain-state.service';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-shows-detail-page',
  templateUrl: './shows-detail-page.component.html',
  styleUrls: ['./shows-detail-page.component.scss']
})
export class ShowsDetailPageComponent implements OnInit {

  show!: Show;
  markShowAsFavourite = false;
  markShowAsWatched: boolean = false;

  isPrimeUser: boolean = false;
  showWatchButton = true;

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router, private readonly authService: AuthService,
    private readonly favShowService: FavouriteShowsService,
    private readonly showService: ShowsService,
    private readonly translateService: TranslateService,
    private readonly maintainStateService: MaintainStateService,
    private readonly snackBar: MatSnackBar) {

    this.markShowAsFavourite = false;
    this.markShowAsWatched = false;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.show = data['show'];
    });
    if (this.show === undefined) {
      this.route.paramMap.subscribe(data => {
        const showId = data.get('showId');
        this.showService.getShowsDetails(showId!).subscribe(resp => {
          this.show = resp;
        });
      });
    }
    this.processDataForRendering();
  }

  markShowAsFav(showId: string): void {
    if (this.authService.isAuthenticated()) {
      const data = {
        userId: this.authService.getUserId(),
        showId: showId,
        isMarkedAsFavorite: true,
        isMarkedAsWatched: false
      } as FavouriteShows;
      this.favShowService.markShowAsFav(data).subscribe(data => {
        this.markShowAsFavourite = true;
        this.openSnackBar(this.translateService.instant('HOME.MARKED_SHOW_AS_FAVORITE'),
          '', "success-style");
      });
    } else {
      this.maintainStateActionData(false);
    }
  }

  processDataForRendering() {
    if (this.authService.isAuthenticated()) {
      const response = this.favShowService.getUserFavShow(this.authService.getUserId(), this.show.id);
      if (response !== undefined) {
        this.markShowAsFavourite = response.isMarkedAsFavorite;
        this.markShowAsWatched = response.isMarkedAsWatched;
      }
      this.isPrimeUser = this.authService.getUserPrime() !== null ? true : false;
    }
    if (this.show.isAvailableOnPrime && this.isPrimeUser) {
      this.showWatchButton = true;
    } else if (this.show.isAvailableOnPrime && !this.isPrimeUser) {
      this.showWatchButton = false;
    }
  }

  addShowToWatchList(showId: string): void {
    if (this.authService.isAuthenticated()) {
      const data = {
        userId: this.authService.getUserId(),
        showId: showId,
        isMarkedAsFavorite: false,
        isMarkedAsWatched: true
      } as FavouriteShows;
      this.favShowService.markShowAsWatched(data).subscribe(data => {
        this.markShowAsWatched = true;
      });
    } else {
      this.maintainStateActionData(true);
    }
  }

  maintainStateActionData(booleanFlag: boolean): void {
    const data: StateData = {
      navigationUrl: '/shows/' + this.show.id,
      showId: this.show.id,
      markShowAsWatched: booleanFlag
    };
    this.maintainStateService.setStateAction(data);
    this.router.navigateByUrl('/auth/login');
  }

  viewFavShows(): void {
    this.router.navigateByUrl('/user/my-favourites');
  }

  viewWatchedShows(): void {
    this.router.navigateByUrl('/user/my-watched');
  }

  onCancelClick(): void {
    this.router.navigateByUrl('/shows');
  }

  openSnackBar(message: string, action: string, style: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: [style],
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
}
