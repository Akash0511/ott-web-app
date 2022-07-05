import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { PrimeOffers } from 'src/app/core/interfaces/primeOffers.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

import { GetPrimeMembershipComponent } from './get-prime-membership.component';

describe('GetPrimeMembershipComponent', () => {
  let component: GetPrimeMembershipComponent;
  let fixture: ComponentFixture<GetPrimeMembershipComponent>;
  let dummyOffer: PrimeOffers[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GetPrimeMembershipComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
          {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                primeOffersList: dummyOffer,
              }),
            }
          }
        },
        AuthService,
        UserService
      ],
      imports: [
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
    dummyOffer = [
      {
        id: "3",
        name: "Super",
        price: 399,
        durationInMonths: 6,
        description: "Exclusive Originals & International Movies"
      }
    ];
    fixture = TestBed.createComponent(GetPrimeMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
