import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { Show } from 'src/app/core/interfaces/show.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';

import { ShowsDetailPageComponent } from './shows-detail-page.component';

describe('ShowsDetailPageComponent', () => {
  let component: ShowsDetailPageComponent;
  let fixture: ComponentFixture<ShowsDetailPageComponent>;

  let dummyShow: Show;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShowsDetailPageComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
          {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                show: dummyShow,
              }),
            }
          }
        },
        FavouriteShowsService,
        AuthService,
      ],
      imports: [
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
    dummyShow =
    {
      id: "1",
      name: "Thor",
      title: "Thor: Love and Thunder",
      description: "my test case description",
      language: "English",
      genre: "Action, Adventure, Comedy",
      imdbRating: 5,
      imgUrl: "assets/images/movies/Thor.jpg",
      isAvailableOnPrime: true,
      showReviews: [
      ]
    };
    fixture = TestBed.createComponent(ShowsDetailPageComponent);
    component = fixture.componentInstance;
    component.show = dummyShow;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
