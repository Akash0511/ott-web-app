import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/core/interfaces/show.model';

@Component({
  selector: 'app-my-watched-shows',
  templateUrl: './my-watched-shows.component.html',
  styleUrls: ['./my-watched-shows.component.scss']
})
export class MyWatchedShowsComponent implements OnInit {

  myWatchedShowList! : Show[];

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data :  any)=>{
      this.myWatchedShowList = data.myWatchedShowsList;
      console.log( this.myWatchedShowList);
    });
  }
}
