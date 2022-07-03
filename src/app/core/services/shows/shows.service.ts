import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Show } from '../../interfaces/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  showsList = new BehaviorSubject<Show[]>([]);
  readonly SHOW_SERVICE_BASE_URL = '/assets/templates';

  constructor(private readonly http: HttpClient) {
    this.getAllShows().subscribe(data => {
      this.showsList.next(data);
    });
  }

  public getAllShows(): Observable<Show[]> {
    const url = `${this.SHOW_SERVICE_BASE_URL}/shows.json`;
    return this.http.get<Show[]>(url);
  }

  public getShows(): Observable<Show[]> {
    return this.showsList.asObservable();
  }

  public getShowsDetails(showId: string): Observable<Show> {
    return this.getShows().pipe(
      map(items => items.filter(item => item.id === showId)[0]));
  }

  public addShow(showObj: Show): Observable<string> {
    const showsList = this.showsList.getValue();
    if (this.checkIfShowAlreadyExists(showsList, showObj.name)) {
      return of('Show Already Exists.');
    }

    showObj.id = (showsList.length + 1).toString();
    showsList.push(showObj);
    this.showsList.next(showsList);
    return of('Show data added successfully.')
  }

  public checkIfShowAlreadyExists(showList: Show[], showName: string): Boolean {
    return showList.find(data => data.name === showName) !== undefined ? true : false;
  }
}
