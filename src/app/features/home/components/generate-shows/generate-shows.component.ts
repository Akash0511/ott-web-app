import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from 'src/app/core/interfaces/show.model';

@Component({
  selector: 'app-generate-shows',
  templateUrl: './generate-shows.component.html',
  styleUrls: ['./generate-shows.component.scss']
})
export class GenerateShowsComponent implements OnInit {

  @Input()
  showInfo!: Show;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  viewShowDetail(showId: string): void {
    this.router.navigateByUrl('/shows/' + showId);
  }

}
