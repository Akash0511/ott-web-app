import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FavouriteShows } from '../../interfaces/favourite.model';
import { Show } from '../../interfaces/show.model';
import { ShowsService } from '../shows/shows.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteShowsService {

  readonly FAVORITES_WATCHED_BASE_URL = '/assets/templates';

  favWatchedShowsList = new BehaviorSubject<FavouriteShows[]>([]);

  constructor(private showService: ShowsService,
    private readonly http: HttpClient) {
    this.getAllFavouritesOrWatchedList();
  }

  public getAllFavouritesOrWatchedList(): void {
    const url = `${this.FAVORITES_WATCHED_BASE_URL}/fav-watched.json`;
    this.http.get<FavouriteShows[]>(url).subscribe(data => {
      this.favWatchedShowsList.next(data);
    });
  }

  getShowsData(data: FavouriteShows[]): Observable<Show[]> {
    const showList: Show[] = [];
    data.forEach(item => {
      this.showService.getShowsDetails(item.showId).subscribe(response => {
        showList.push(response);
      })
    });
    return of(showList);
  }

  markShowAsFav(dataObj: FavouriteShows): Observable<string> {
    const favWatchedList = this.favWatchedShowsList.getValue();
    let response = this.getUserFavShow(dataObj.userId, dataObj.showId);
    if (response !== undefined) {
      response.isMarkedAsFavorite = true;
      favWatchedList.push(response);
    } else {
      favWatchedList.push(dataObj);
    }
    this.favWatchedShowsList.next(favWatchedList);
    return of('Favourite show added!!');
  }

  markShowAsWatched(dataObj: FavouriteShows): void {
    const favWatchedList = this.favWatchedShowsList.getValue();
    let response = this.getUserFavShow(dataObj.userId, dataObj.showId);
    if (response !== undefined) {
      response.isMarkedAsWatched = true;
      favWatchedList.push(response);
    } else {
      favWatchedList.push(dataObj);
    }
    this.favWatchedShowsList.next(favWatchedList);
  }

  getUserFavouriteShows(userId: string): Observable<Show[]> {
    const favWatchedList = this.favWatchedShowsList.getValue();
    const data: FavouriteShows[] = favWatchedList.filter(item => item.userId === userId && item.isMarkedAsFavorite);
    return this.getShowsData(data);
  }

  getUserWatchedShows(userId: string): Observable<Show[]> {
    const favWatchedList = this.favWatchedShowsList.getValue();
    const data: FavouriteShows[] = favWatchedList.filter(item => item.userId === userId && item.isMarkedAsWatched);
    return this.getShowsData(data);
  }

  removeFavShow(userId: string, showId: string): Observable<string> {
    const favWatchedList = this.favWatchedShowsList.getValue();
    let response = this.getUserFavShow(userId, showId);
    if (response !== undefined) {
      response.isMarkedAsFavorite = false;
      favWatchedList.push(response);
      this.favWatchedShowsList.next(favWatchedList);
      return of('Favourite show removed!!!');
    }
    return of('No favourite show found');
  }

  getUserFavShow(userId: string, showId: string): FavouriteShows {
    return this.favWatchedShowsList.getValue().find(item =>
      item.userId === userId && item.showId === showId) as FavouriteShows;
  }
}
