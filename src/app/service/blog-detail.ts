import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDetail {
  private apiUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) { }


  getBlogs() {
    return this.http.get(`${this.apiUrl}/Blogs`);
  }
  getBlogById(id: string) {
    return this.http.get(`${this.apiUrl}/Blogs/${id}`);
  }

  getBlogDetails(id: string) {
    return this.http.get(`${this.apiUrl}/contentSections?blogId=${id}`);
  }

}
