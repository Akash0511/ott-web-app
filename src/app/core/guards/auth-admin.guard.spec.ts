import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth/auth.service';

import { AuthAdminGuard } from './auth-admin.guard';

describe('AuthAdminGuard', () => {
  let guard: AuthAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue:
          {
            isAdmin: () => true
          }
        },
        AuthService
      ],
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
