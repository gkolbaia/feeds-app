import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getPosts(data) {
    return this.http.post('https://api.feedc.com/feed/get.php', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
  getpost(data) {
    return this.http.post('https://api.feedc.com/post/get.php', data);
  }
}
