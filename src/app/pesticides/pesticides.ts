import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesticides',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './pesticides.html',
  styleUrl: './pesticides.css'
})
export class Pesticides implements OnInit {
  pesticidesData: any[] = [];      // full data from API
  filteredPesticides: any[] = [];  // filtered data for search
  searchText: string = '';         // search input

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPesticides();
  }

  getPesticides() {
    this.http.get<any[]>('http://localhost:4000/Pesticides')
      .subscribe({
        next: (data: any[]) => {
          this.pesticidesData = data;
          this.filteredPesticides = [...this.pesticidesData]; // initially show all
          console.log('Fetched Data:', data);
        },
        error: (err: any) => console.error('Error:', err)
      });
  }

  onSearch() {
    const search = this.searchText.toLowerCase();
    this.filteredPesticides = this.pesticidesData.filter(item =>
      item.product_name.toLowerCase().includes(search)
    );
  }
}
