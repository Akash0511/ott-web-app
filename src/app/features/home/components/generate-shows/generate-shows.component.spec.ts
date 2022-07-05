import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { Show } from 'src/app/core/interfaces/show.model';

import { GenerateShowsComponent } from './generate-shows.component';

describe('GenerateShowsComponent', () => {
  let component: GenerateShowsComponent;
  let fixture: ComponentFixture<GenerateShowsComponent>;
  let dummyShow: Show;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GenerateShowsComponent
      ],
      providers: [
      ],
      imports: [
        MatCardModule,
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
    fixture = TestBed.createComponent(GenerateShowsComponent);
    component = fixture.componentInstance;
    component.showInfo = dummyShow;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct show data', () => {
    component.showInfo = dummyShow;
    expect(component.showInfo.id).toBe('1');
  });

  it('should render the description of the show in the p tag', () => {
    component.showInfo = dummyShow;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('my test case description');
  });

  it('should navigate to show detail page when clicked', inject([Router], (router: Router) => {
    component.showInfo = dummyShow;
    spyOn(router, 'navigateByUrl').and.stub();
    component.viewShowDetail('1');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/shows/1');
  }));

});
