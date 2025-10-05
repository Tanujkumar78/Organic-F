import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fertilizers',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './fertilizers.html',
  styleUrl: './fertilizers.css'
})
export class Fertilizers implements OnInit {
  fertilizerData$: any[] = [];   // stores all data
  filteredUsers: any[] = [];     // stores filtered data
  searchText: string = '';       // search box value

  constructor() {}

  ngOnInit(): void {
    this.getFertilizers();
  }

  getFertilizers() {
    const apiUrl = 'http://localhost:4000/Fertilizers'; // replace with your API URL

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.fertilizerData$ = data;
        this.filteredUsers = [...this.fertilizerData$]; // initially show all data
      })
      .catch(error => {
        console.error('Fetch error:', error);
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
}
