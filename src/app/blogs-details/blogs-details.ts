import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './blogs-details.html',
  styleUrl: './blogs-details.css'
})
export class BlogsDetails {

  contentSections = [
    {
       id: 1,
      sectionTitle: "1. Composting",
      text: "Use farm waste, kitchen scraps, and plant residues to create nutrient-rich compost. Compost improves soil structure, retains moisture, and supplies essential nutrients.",
      imageUrl: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
      videoUrl: "https://youtu.be/18_bk-jaOnU"
    },
    { 
       id: 2,
      sectionTitle: "2. Crop Rotation",
      text: "Rotate different types of crops in the same field over seasons. Legumes like beans and peas fix nitrogen naturally, reducing dependency on chemical fertilizers.",
      imageUrl: "https://images.pexels.com/photos/175756/pexels-photo-175756.jpeg",
      videoUrl: ""
    },
    {
      id: 3,
      sectionTitle: "3. Green Manuring",
      text: "Grow green manure crops such as legumes or clover and plow them back into the soil. This enriches the soil with organic matter and essential nutrients.",
      imageUrl: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg",
      videoUrl: ""
    },
    {
       id: 4,
      sectionTitle: "4. Vermicomposting",
      text: "Use earthworms to convert organic waste into vermicompost. Vermicompost increases beneficial microorganisms, improves soil aeration, and enriches nutrient content.",
      imageUrl: "https://images.pexels.com/photos/1439213/pexels-photo-1439213.jpeg",
      videoUrl: "https://www.youtube.com/embed/V4uD6kGk2uI"
    },
    {
       id: 5,
      sectionTitle: "5. Biofertilizers",
      text: "Apply natural microorganisms such as Rhizobium, Azospirillum, and Mycorrhizal fungi. They enhance nitrogen and phosphorus absorption, supporting sustainable crop growth.",
      imageUrl: "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg",
      videoUrl: ""
    }
  ];

}
