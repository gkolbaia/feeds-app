import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const requestData = {
      place_name: 'Georgia',
      type: '[feed] load',
      device_info: {
        language: 'ka',
        device_language: 'en',
        system: 'web',
        api_version: 44,
      },
      user_id: -1843715,
      seen_posts: ['91242'],
    };
    return this.http.post('https://api.feedc.com/feed/get.php', requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
}
