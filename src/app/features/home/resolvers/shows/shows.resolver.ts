import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Show } from 'src/app/core/interfaces/show.model';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Injectable({
  providedIn: 'root'
})
export class ShowsResolver implements Resolve<Show[]> {
  constructor(private showsService: ShowsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Show[]> {
    return this.showsService.getAllShows();
  }
}
