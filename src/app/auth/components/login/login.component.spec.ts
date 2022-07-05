import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockAuthService: AuthService;
  let mockUserService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        AuthService,
        UserService
      ],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockUserService = fixture.debugElement.injector.get(UserService);
    spyOn(mockUserService, 'getUserDetail').and.callFake(() => {
      return of({
        userId: "1",
        firstName: "Akash",
        lastName: "Bhardwaj",
        userName: "akash@nagarro.com",
        phone: "9834125612",
        pwd: "abc123",
        role: "admin",
        isPrimeMember: true
      });
    });
    mockAuthService = fixture.debugElement.injector.get(AuthService);
    spyOn(mockAuthService, 'logIn').and.callFake(() => {
      return of('');
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
