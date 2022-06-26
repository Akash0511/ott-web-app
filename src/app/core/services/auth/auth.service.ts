import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginDetails } from '../../interfaces/loginDetails.model';

const USERNAME_KEY = 'AuthUserName';
const USERROLE_KEY = 'AuthUserRole';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validateUserIdentitySubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() { }

  public logIn(userData: LoginDetails): Observable<string> {
    this.saveUserName(userData.email);
    this.saveUserRole(userData.userRole);
    this.validateUserIdentitySubject.next(true);
    return of('login success');
  }

  public logOut(): void {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(USERROLE_KEY);
    localStorage.clear();
    this.validateUserIdentitySubject.next(false);
  }

  public saveUserName(userName: string): void {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, userName);
  }

  public saveUserRole(userRole: string): void {
    localStorage.removeItem(USERROLE_KEY);
    localStorage.setItem(USERROLE_KEY, userRole);
  }

  public getUserName(): any {
    return localStorage.getItem(USERNAME_KEY);
  }

  public getUserRole(): any {
    return localStorage.getItem(USERROLE_KEY);
  }

  public isAuthenticated(): boolean {
    if (this.getUserName() !== null) {
      return true;
    }
    return false;
  }

  public isAdmin(): boolean {
    const userRole = this.getUserRole();
    if (this.getUserName() !== null && userRole !== null && userRole === 'admin') {
      return true;
    }
    return false;
  }

  public isLoggedIn(): Observable<boolean> {
    return this.validateUserIdentitySubject.asObservable();
  }
}
