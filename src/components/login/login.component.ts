import { Component, NgModule } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { Login } from '../../modles/login.model';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  loginData: Login = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Save token
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
  goToRegister() {
    this.router.navigate(['/register']); // Absolute path
  }
}
