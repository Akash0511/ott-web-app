import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { Show } from 'src/app/core/interfaces/show.model';
import { MyWatchedShowsComponent } from './my-watched-shows.component';

describe('MyWatchedShowsComponent', () => {
  let component: MyWatchedShowsComponent;
  let fixture: ComponentFixture<MyWatchedShowsComponent>;

  let dummyShows: Show[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyWatchedShowsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
          {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                myWatchedShowsList: dummyShows,
              }),
            }
          }
        }
      ],
      imports: [
        RouterTestingModule,
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
        id: "2",
        name: "Thor",
        title: "Thor: Love and Thunder",
        description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        language: "English",
        genre: "Adventure",
        imdbRating: 5,
        imgUrl: "assets/images/shows/Thor.jpg",
        isAvailableOnPrime: true,
        showReviews: [
        ]
      }
    ];

    fixture = TestBed.createComponent(MyWatchedShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
