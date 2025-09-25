import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs {
  
  // Blog data list
  blogPosts = [
    {
      id: 1,
      title: '5 Natural Ways to Improve Soil Fertility',
      description: 'Learn how compost, crop rotation, and biofertilizers can naturally improve soil fertility.',
      content: `
        Soil fertility is the foundation of successful farming. Instead of relying on chemical fertilizers,
        farmers can improve soil quality through natural methods. Compost adds vital nutrients and organic
        matter, while crop rotation helps prevent nutrient depletion. Green manures, such as legumes,
        enrich the soil with nitrogen. Vermicompost improves soil texture and water retention. Biofertilizers
        like Rhizobium and Azospirillum enhance nutrient absorption. Together, these methods keep the soil
        healthy and productive for long-term farming.
      `,
      imageUrl: 'https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg'
    },
    {
      id: 2,
      title: 'How to Control Pests Without Chemicals',
      description: 'Discover organic pesticides and eco-friendly methods for protecting your crops.',
      content: `
        Chemical pesticides may give quick results, but they damage soil health, the environment, and human safety.
        Organic farming relies on eco-friendly pest control. Neem oil spray is highly effective against aphids,
        mites, and whiteflies. Garlic-chili spray works as a natural insect repellent. Beneficial insects such as
        ladybugs and spiders eat harmful pests. Trap crops like marigold attract pests away from main crops. Crop
        rotation prevents pest buildup in the soil. These methods ensure healthy crops while keeping nature balanced.
      `,
      imageUrl: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg'
    },
    {
      id: 3,
      title: 'Best Crops to Grow in Monsoon Season',
      description: 'Find out which crops thrive during the rainy season and tips for managing water efficiently.',
      content: `
        The monsoon season provides abundant rainfall, making it ideal for certain crops. Rice is the most
        popular monsoon crop due to its high water requirement. Farmers also grow maize, soybean, cotton,
        pulses, and groundnut during this season. To avoid waterlogging, raised bed farming and proper drainage
        systems are recommended. Mulching helps conserve soil moisture and suppress weeds. Choosing monsoon-friendly
        crops with proper irrigation ensures high yields even during heavy rains.
      `,
      imageUrl: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg'
    },
    {
      id: 4,
      title: 'Organic Composting: Turning Waste into Gold',
      description: 'Learn how to recycle farm and kitchen waste into nutrient-rich organic compost.',
      content: `
        Composting is one of the most effective ways to recycle organic waste and enrich soil naturally.
        Farmers can use crop residues, animal manure, and kitchen waste to prepare compost. Vermicomposting,
        which uses earthworms, accelerates the process and creates highly nutritious compost. Compost improves
        soil structure, increases water retention, and supplies essential nutrients. It reduces dependence on
        chemical fertilizers and helps farmers cut costs. Every farm can benefit from a composting pit or bin.
      `,
      imageUrl: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg'
    },
    {
      id: 5,
      title: 'Water Conservation Techniques in Organic Farming',
      description: 'Smart irrigation and water-saving methods for sustainable agriculture.',
      content: `
        Water is one of the most critical resources in farming. Organic farming promotes methods that
        conserve water and reduce wastage. Drip irrigation delivers water directly to plant roots, reducing
        evaporation. Rainwater harvesting collects and stores water for later use. Mulching keeps soil moist
        and prevents erosion. Crop selection based on climate and soil helps reduce irrigation demand. These
        eco-friendly techniques save water, lower costs, and ensure sustainable crop growth.
      `,
      imageUrl: 'https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg'
    }
  ];

  constructor(private router: Router) {}

  // hen() {
  //   this.router.navigate(['/dashboard']); // navigate to AboutComponent
  // }


}