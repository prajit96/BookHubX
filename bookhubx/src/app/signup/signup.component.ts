// signup.component.ts

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService],
})
export class SignupComponent {
  signupForm: { username: string, password: string } = { username: '', password: '' };
  signupMessages: any[] = [];

  constructor(private authService: AuthService, private messageService: MessageService) {}

  onSignup() {
    this.authService.signup(this.signupForm).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Sign Up Successful', detail: 'Welcome to BookHubX!' });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Sign Up Failed', detail: 'Username already exists.' });
      }
    );
  }
}
