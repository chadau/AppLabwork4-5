import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  public article: Article;

  constructor(private newsService: NewsService) { 
    this.article = new Article();
  }

  ngOnInit() {
    this.newsService.getNews('us').subscribe(
      data => {
        this.article = data;
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
