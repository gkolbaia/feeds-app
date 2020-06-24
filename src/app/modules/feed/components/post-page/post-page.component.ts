import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  id: number;
  post: any;
  postType = 'full';
  constructor(private ar: ActivatedRoute, private feedService: FeedService) {}

  ngOnInit(): void {
    this.ar.params.subscribe((res) => {
      this.id = res.id;
    });
    const requestDataJson = {
      post_id: this.id,
      device_info: {
        language: 'ka',
        device_language: 'en',
        system: 'web',
        api_version: 44,
      },
      user_id: 171977,
      token: '5rJNJXCQh71SLFICTtQEdZnBZahEQl',
    };
    const data = this.generateFormData(requestDataJson);

    this.feedService.getpost(data).subscribe((res) => {
      this.post = res;
    });
  }
  generateFormData(data) {
    const requestFormData = new FormData();
    requestFormData.append('post_id', `${this.id}` );
    requestFormData.append('device_info', '{language:ka,device_language:en,system:web,api_version: 44,}' );
    requestFormData.append('user_id', '171977' );
    requestFormData.append('token', '5rJNJXCQh71SLFICTtQEdZnBZahEQl');
    return requestFormData;
  }
}
