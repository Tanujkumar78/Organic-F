import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogDetail } from '../service/blog-detail';

@Component({
  selector: 'app-blogs-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './blogs-details.html',
  styleUrl: './blogs-details.css'
})
export class BlogsDetails implements OnInit {

  blogId: any;
  blogTitle: any;

  constructor(public domSanitization: DomSanitizer, private blogDetailService: BlogDetail, private activeRoute: ActivatedRoute) {
    this.blogId = this.activeRoute.snapshot.paramMap.get('id')
  }


  blogDetails$: any[] = []; // to store fetched data

  ngOnInit(): void {
    this.blogDetailService.getBlogById(this.blogId).subscribe((data: any) => {
      this.blogTitle = data.title;
      console.log(this.blogTitle);
    });
    this.getBlogDetails();
  }

  getBlogDetails() {
    this.blogDetailService.getBlogDetails(this.blogId).subscribe((data: any) => {
      this.blogDetails$ = data;     
    });
  }


}
