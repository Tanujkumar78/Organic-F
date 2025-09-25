import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fertilizers',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './fertilizers.html',
  styleUrl: './fertilizers.css'
})

export class Fertilizers implements OnInit {

  fertilizerData$: any[] = []; // to store fetched data

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
        this.fertilizerData$ = data; // store API data
        // console.log('Fetched Data:', this.fertilizerData$);
      })
      .catch(error => {
          // console.error('Fetch error:', error);
      });
  }
}
