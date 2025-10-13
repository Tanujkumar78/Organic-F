import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BlogDetail } from '../service/blog-detail';
import { FavoriteService } from '../service/favorite';

@Component({
  selector: 'app-fertilizers',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './fertilizers.html',
  styleUrl: './fertilizers.css'
})
export class Fertilizers implements OnInit {
  fertilizerData$: any[] = [];
  filteredUsers: any[] = [];
  searchText: string = '';

  constructor(
    private router: Router,
    private blogService: BlogDetail,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.getFertilizers();
  }

  getFertilizers() {
    this.blogService.getFertilizers().subscribe((data: any) => {
      this.fertilizerData$ = data;
      this.filteredUsers = [...this.fertilizerData$];
    });
  }

  onSearch() {
    const search = this.searchText.toLowerCase();
    this.filteredUsers = this.fertilizerData$.filter(item =>
      item.product_name.toLowerCase().includes(search)
    );
  }

  addToCart(item: any) {
    console.log('Adding to cart:', item);
  }

  addToFavorites(item: any) {
    this.favoriteService.addToFavorites(item);
    alert(`${item.product_name} added to Your Cart ❤️`);
  }
}
