import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

import { SearchShowsComponent } from './search-shows.component';

describe('SearchShowsComponent', () => {
  let component: SearchShowsComponent;
  let fixture: ComponentFixture<SearchShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchShowsComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
