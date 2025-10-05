import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogDetail } from '../service/blog-detail';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs {
  
  // Blog data list
  blogPosts:any;

  constructor(private router: Router,private blogService : BlogDetail) {
    this.getAllBlogs()
  }

getAllBlogs(){
  this.blogService.getBlogs().subscribe((data:any)=>{
    this.blogPosts = data;
    console.log(this.blogPosts);
  });
}


}