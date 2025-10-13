import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {


onSubmit(formData: any) {
    console.log('Form submitted:', formData);
    alert(`Welcome ${formData.name}!`);
  }






  fertilizerData: any[] = [];
  
  // Statistics data similar to the design
  stats = {
    happyFarmers: '10K+',
    products: '50+',
    successRate: '95%',
    support: '24/7'
  };

  // Benefits data
  benefits = [
    {
      icon: '🌱',
      title: 'Environmentally Safe',
      description: 'Our products are 100% biodegradable and safe for ecosystem, protecting soil, water, and air quality.'
    },
    {
      icon: '💚',
      title: 'Healthier Crops',
      description: 'Organic nutrients promote stronger, more resilient plants with higher nutritional value and better taste.'
    },
    {
      icon: '📈',
      title: 'Improved Yield',
      description: 'Experience up to 30% higher crop yields with our scientifically formulated organic solutions.'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduce long-term farming costs while improving soil health and reducing dependency on chemicals.'
    },
    {
      icon: '👥',
      title: 'Community Impact',
      description: 'Support sustainable farming practices that benefit local communities and future generations.'
    },
    {
      icon: '✅',
      title: 'Certified Quality',
      description: 'All products are certified organic and meet the highest international quality standards.'
    }
  ];

  // Global results data
  globalResults = {
    farmersServed: '10,000+',
    yieldIncrease: '30%',
    organicCertified: '100%',
    countries: '50+'
  };

  // Knowledge hub articles
  articles = [
    {
      category: 'Soil Health',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      title: 'The Science Behind Organic Fertilizers',
      description: 'Understanding how organic fertilizers work at the molecular level and why they re more effective for long-term soil health.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop'
    },
    {
      category: 'Farming Tips',
      date: 'Mar 12, 2024',
      readTime: '7 min read',
      title: 'Sustainable Pest Management Strategies',
      description: 'Learn integrated pest management techniques that combine natural pesticides with biological controls for maximum effectiveness.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop'
    },
    {
      category: 'Crop Planning',
      date: 'Mar 10, 2024',
      readTime: '4 min read',
      title: 'Maximizing Crop Yields Organically',
      description: 'Proven techniques and timing strategies to increase your harvest while maintaining organic certification standards.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.getFertilizers();
  }

  getFertilizers() {
    const apiUrl = 'http://localhost:3000/Fertilizers';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.fertilizerData = data;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
}
