import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-board',
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.css']
})
export class NewsBoardComponent implements OnInit {
  link: string;
  constructor(private router: Router) { }
  @Input() post: any;
  @Input() type: any;
  ngOnInit(): void {
    this.link = this.type === 'cut' ? `/post/${this.post.id}` : './';
  }
}
