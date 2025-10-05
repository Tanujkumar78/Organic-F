import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { AuthService } from 'auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/dashboard']);
      },
      error: (err) => alert(err.error.message || 'Login failed')
    });
  }
 }
// import { Component, NgZone } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })
// export class Login {
//   email = '';
//   password = '';

//   constructor(
//     private auth: AuthService,
//     private router: Router,
//     private ngZone: NgZone
//   ) {}

//   onLogin() {
//     this.auth.login({ email: this.email, password: this.password }).subscribe({
//       next: (res: any) => {
//         const token =
//           res?.token ??
//           res?.access_token ??
//           res?.data?.token ??
//           res?.data?.access_token;

//         if (!token || String(token).trim() === '') {
//           alert('Login succeeded but no token was returned by the server.');
//           return;
//         }

//         this.ngZone.run(() => {
//           localStorage.setItem('token', String(token));
//           this.router.navigateByUrl('/dashboard');
//         });
//       },
//       error: (err) => alert(err?.error?.message || err?.message || 'Login failed')
//     });
//   }
// }