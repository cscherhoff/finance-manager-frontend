import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { User } from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {}

  signup(user: User) {
    this.http.post('http://localhost:' + environment.backendPortUser + '/register', JSON.stringify(user), this.httpOptions)
    .subscribe(response => console.log(response));
    console.log('Post transaction: ' + JSON.stringify(user));
  }

  logIn(user: User) {
    this.http.post('http://localhost:' + environment.backendPortUser + '/authenticate', JSON.stringify(user), this.httpOptions)
    .subscribe(response => console.log(response));
    console.log('Post transaction: ' + JSON.stringify(user));
  }
}
