import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
})
export class FeedListComponent implements OnInit {
  constructor(private feedService: FeedService) {}
  posts: any;

  ngOnInit(): void {
    this.feedService.getPosts().subscribe((res: any) => {
      this.posts = res.feed[0].posts;
    });
  }
  getPosts(e) {
    this.posts.push({});
  }
}
