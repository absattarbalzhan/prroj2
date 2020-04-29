import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from './user';
// import {mockUser} from './mock-users';

export class LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  logged = false;
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  signUp(username, email, password): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/api/register/`, {
      username,
      password,
      email
    });
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/api/profile/`);
  }

  // tslint:disable-next-line:variable-name
  updateUser(username: string, last_name: string, email: string): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/api/profile/`, {
      username,
      last_name,
      email
    });
  }
}
