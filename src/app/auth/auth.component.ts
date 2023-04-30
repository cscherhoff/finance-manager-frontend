import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formData: User = {
    username: '',
    password: '',
    role: 'ROLE_ADMIN'
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  public signUp() {
    this.authService.signup(this.formData);
  }

  public logIn() {
    this.authService.logIn(this.formData);
  }

}
