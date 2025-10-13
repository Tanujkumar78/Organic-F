import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private currentUserEmail: string | null = null;

  constructor() {
    this.loadCurrentUser();
  }

  private loadCurrentUser() {
    const user = localStorage.getItem('user') || localStorage.getItem('loggedInUser');
    if (user) {
      const parsed = JSON.parse(user);
      this.currentUserEmail = parsed.email || null;
    }
  }

  private getUserKey(): string {
    return `favorites_${this.currentUserEmail}`;
  }

  private getFavoritesForUser(): any[] {
    if (!this.currentUserEmail) return [];
    const data = localStorage.getItem(this.getUserKey());
    return data ? JSON.parse(data) : [];
  }

  getFavorites() {
    this.loadCurrentUser();
    return this.getFavoritesForUser();
  }

  addToFavorites(item: any) {
    this.loadCurrentUser();
    if (!this.currentUserEmail) {
      alert('Please log in to add favorites!');
      return;
    }
    const favorites = this.getFavoritesForUser();
    const exists = favorites.find(f => f.id === item.id);
    if (!exists) {
      favorites.push(item);
      localStorage.setItem(this.getUserKey(), JSON.stringify(favorites));
    }
  }

  removeFromFavorites(id: number) {
    this.loadCurrentUser();
    if (!this.currentUserEmail) return;
    let favorites = this.getFavoritesForUser();
    favorites = favorites.filter(f => f.id !== id);
    localStorage.setItem(this.getUserKey(), JSON.stringify(favorites));
  }

  clearFavoritesOnLogout() {
    this.currentUserEmail = null;
  }
}
