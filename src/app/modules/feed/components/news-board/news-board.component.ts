import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-board',
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.css']
})
export class NewsBoardComponent implements OnInit {

  constructor() { }
  @Input() post: any;
  ngOnInit(): void {
    console.log(this.post);
  }

}
