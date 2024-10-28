import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ensure path is correct
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    // Ensure no empty fields before making the request
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    this.authService.signup(this.username, this.email, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        // Provide a more defensive error check
        this.errorMessage = err?.error?.message || 'An unexpected error occurred.';
      }
    });
  }
}
