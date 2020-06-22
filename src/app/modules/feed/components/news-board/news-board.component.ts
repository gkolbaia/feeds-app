import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-board',
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.css']
})
export class NewsBoardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() post: any;
  ngOnInit(): void {
    console.log(this.post);
  }
  navigateToPost(){
    this.router.navigate(['/post'])
  }
}
