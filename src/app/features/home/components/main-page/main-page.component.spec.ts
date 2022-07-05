import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpLoaderFactory } from 'src/app/app.module';
import { Show } from 'src/app/core/interfaces/show.model';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';
import { ShowsService } from 'src/app/core/services/shows/shows.service';
import { GenerateShowsComponent } from '../generate-shows/generate-shows.component';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let dummyShows: Show[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        GenerateShowsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
          {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                showsList: dummyShows,
              }),
            }
          }
        },
        ShowsService,
        FavouriteShowsService
      ],
      imports: [
        NgxPaginationModule,
        MatCardModule,
        RouterTestingModule,
        MatSnackBarModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        HttpClientModule
      ]
    })
      .compileComponents();
  });
  beforeEach(() => {
    dummyShows = [
      {
        id: "1",
        name: "Thor",
        title: "Thor: Love and Thunder",
        description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        language: "English",
        genre: "Action, Adventure, Comedy",
        imdbRating: 5,
        imgUrl: "assets/images/movies/Thor.jpg",
        isAvailableOnPrime: true,
        showReviews: [
        ]
      }
    ];
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
