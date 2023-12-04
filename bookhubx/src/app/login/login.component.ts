// login.component.ts

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  loginForm: { username: string, password: string } = { username: '', password: '' };
  loginMessages: any[] = [];

  constructor(private authService: AuthService, private messageService: MessageService) {}

  onLogin() {
    this.authService.login(this.loginForm).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: 'Welcome back!' });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid username or password.' });
      }
    );
    this.authService.setAuthenticated(true);
  }
}
