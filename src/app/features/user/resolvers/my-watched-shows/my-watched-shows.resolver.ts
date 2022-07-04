import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Show } from 'src/app/core/interfaces/show.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';

@Injectable({
  providedIn: 'root'
})
export class MyWatchedShowsResolver implements Resolve<Show[]> {

  constructor(private readonly authService: AuthService,
    private readonly favShowService: FavouriteShowsService) { }

  resolve(): Observable<Show[]> {
    return this.favShowService.getUserWatchedShows(this.authService.getUserId());
  }
}
