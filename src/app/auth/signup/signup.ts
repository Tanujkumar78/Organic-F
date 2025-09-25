
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  role = 'Distributor';

  constructor(private auth: AuthService, private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    this.auth.signup({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => alert(err.error.message || 'Signup failed')
    });
  }
}
