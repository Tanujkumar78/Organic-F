import { Component } from '@angular/core';
import { BlogDetail } from '../service/blog-detail';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
   constructor(private router: Router,private blogService : BlogDetail) {
    this.gethee()
  }

gethee(){
  
}
}
