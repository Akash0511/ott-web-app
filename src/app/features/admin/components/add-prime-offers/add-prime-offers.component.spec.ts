import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { PrimeOffersService } from 'src/app/core/services/prime-offers/prime-offers.service';

import { AddPrimeOffersComponent } from './add-prime-offers.component';

describe('AddPrimeOffersComponent', () => {
  let component: AddPrimeOffersComponent;
  let fixture: ComponentFixture<AddPrimeOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddPrimeOffersComponent
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
        PrimeOffersService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrimeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
