import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews('us').subscribe(
      data => {
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
