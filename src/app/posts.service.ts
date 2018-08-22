import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts');
  }

}
