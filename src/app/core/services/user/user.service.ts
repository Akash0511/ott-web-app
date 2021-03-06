import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { User } from '../../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly USER_SERVICE_BASE_URL = '/assets/templates';
  userList = new BehaviorSubject<User[]>([]);

  constructor(private readonly http: HttpClient) {
    this.getAllUsers().subscribe(users => {
      this.userList.next(users as User[]);
    })
  }

  public getAllUsers(): Observable<User[]> {
    const url = `${this.USER_SERVICE_BASE_URL}/user.json`;
    return this.http.get<User[]>(url);
  }

  public getUsers(): Observable<User[]> {
    return this.userList.asObservable();
  }

  public getUserDetail(userName: string, password: string): Observable<User> {
    return this.getUsers().pipe(map(data => data.filter(x => x.userName === userName
      && x.pwd === password)[0]));
  }

  public userPrimeStatusUpdation(userId: string) {
    const userList = this.userList.getValue();
    const index = this.findIndexInfoUser(userList, userId);
    userList[index].isPrimeMember = true;
    this.userList.next(userList);
  }

  public findIndexInfoUser(userList: User[], userId: string): number {
    return userList.findIndex((obj => obj.userId === userId));
  }

  public addUser(user: User): Observable<string> {
    const userList = this.userList.getValue();
    if (this.userAlreadyExists(userList, user.userName)) {
      return of('User Already Exists.');
    }

    user.userId = (userList.length + 1).toString();
    userList.push(user);
    this.userList.next(userList);
    return of('User Created Successfully.');
  }

  public userAlreadyExists(userList: User[], userName: string): Boolean {
    return userList.find(data => data.userName === userName) !== undefined ? true : false;
  }
}
