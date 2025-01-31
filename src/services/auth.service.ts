import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../modles/login.model';
import { Register } from '../modles/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  // Login method
  login(credentials: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Register method
  register(data: Register): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, data);
  }

  // Check if admin is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Get username (after successful login, store it in localStorage)
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // Save username to localStorage
  setUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  // Logout admin
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // Also remove username when logging out
  }

  // After a successful login, store the token and username
  handleLoginResponse(response: any): void {
    // Store token and username in localStorage after successful login
    localStorage.setItem('token', response.token);
    this.setUsername(response.username); // Assuming your response contains the username
  }
}
