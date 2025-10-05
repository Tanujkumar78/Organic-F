import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
}
