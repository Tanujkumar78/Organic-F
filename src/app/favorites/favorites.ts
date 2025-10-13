import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../service/favorite';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites implements OnInit {
  favoriteItems: any[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.favoriteItems = this.favoriteService.getFavorites();
  }

  removeFromFavorites(id: number) {
    this.favoriteService.removeFromFavorites(id);
    this.favoriteItems = this.favoriteService.getFavorites();
  }
}
