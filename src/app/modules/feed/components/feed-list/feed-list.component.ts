import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
const requestData: any = {
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
@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
})
export class FeedListComponent implements OnInit {
  constructor(private feedService: FeedService) {}
  posts: any;
  postType = 'cut';
  postsResponse: any;
  ngOnInit(): void {
    const data = this.generateFormData(requestData);
    this.feedService.getPosts(data).subscribe((res: any) => {
      this.postsResponse = res;
      this.posts = res.feed[0].posts;
    });
  }
  generateFormData(jsonData): FormData {
    const requestFormData = new FormData();
    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        requestFormData.append(key, JSON.stringify(jsonData[key]));
      }
    }
    return requestFormData;
  }
  onScroll(e) {
    requestData.page_token = this.postsResponse.feed[0].page_token;
    const data = this.generateFormData(requestData);
    this.feedService.getPosts(requestData).subscribe((res: any) => {
      this.posts = this.posts.concat(res.feed[0].posts);
    });
  }
}
