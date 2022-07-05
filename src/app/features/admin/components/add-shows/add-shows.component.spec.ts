import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

import { AddShowsComponent } from './add-shows.component';

describe('AddShowsComponent', () => {
  let component: AddShowsComponent;
  let fixture: ComponentFixture<AddShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddShowsComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatSnackBarModule
      ],
      providers: [
        ShowsService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
