import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/core/interfaces/show.model';

@Component({
  selector: 'app-shows-detail-page',
  templateUrl: './shows-detail-page.component.html',
  styleUrls: ['./shows-detail-page.component.scss']
})
export class ShowsDetailPageComponent implements OnInit {

  show! : Show;
  markShowAsFavourite = false;

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.show = data['show']
      console.log(this.show);
    })
  }

  markShowAsFav(showId: string):void{

  }

  viewFavShows():void{

  }
}
