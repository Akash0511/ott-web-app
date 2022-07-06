import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../interfaces/user.model';

const USERNAME_KEY = 'AuthUserName';
const USERROLE_KEY = 'AuthUserRole';
const USERID_KEY = 'AuthUserId';
const USERPRIME_KEY = 'AuthUserPrime';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validateUserIdentitySubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  validateAdminIdentitySubject = new BehaviorSubject<boolean>(this.isAdmin());

  constructor() { }

  public logIn(userData: User): Observable<string> {
    this.saveUserName(userData.userName);
    this.saveUserRole(userData.role);
    this.saveUserId(userData.userId);
    if (userData.isPrimeMember) {
      this.saveUserPrime();
    }
    if (userData.role === 'admin') {
      this.validateAdminIdentitySubject.next(true);
    }
    this.validateUserIdentitySubject.next(true);
    return of('login success');
  }

  public logOut(): void {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(USERROLE_KEY);
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(USERPRIME_KEY);
    localStorage.clear();
    this.validateUserIdentitySubject.next(false);
    this.validateAdminIdentitySubject.next(false);
  }

  public saveUserName(userName: string): void {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, userName);
  }

  public saveUserRole(userRole: string): void {
    localStorage.removeItem(USERROLE_KEY);
    localStorage.setItem(USERROLE_KEY, userRole);
  }

  public saveUserPrime(): void {
    localStorage.removeItem(USERPRIME_KEY);
    localStorage.setItem(USERPRIME_KEY, "true");
  }

  public getUserName(): any {
    return localStorage.getItem(USERNAME_KEY);
  }

  public getUserRole(): any {
    return localStorage.getItem(USERROLE_KEY);
  }

  public getUserPrime(): any {
    return localStorage.getItem(USERPRIME_KEY);
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

  public isLoggedInAsAdmin(): Observable<boolean> {
    return this.validateAdminIdentitySubject.asObservable();
  }

  public saveUserId(userId: string): void {
    localStorage.removeItem(USERID_KEY);
    localStorage.setItem(USERID_KEY, userId);
  }

  public getUserId(): any {
    return localStorage.getItem(USERID_KEY);
  }
}
