import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchText: string;
  Articles: Article[];

  constructor(private newsService: NewsService) { 
    this.Articles = [];
  }

  ngOnInit() {
  }

  change(query: string) {
    this.newsService.searchNews(query).subscribe(
      data => {
        this.Articles = data;
        console.log("data", data);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
