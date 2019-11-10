import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from} from 'rxjs';
import { Article } from '../models/article';
import { map, switchMap } from 'rxjs/operators';
import { ReplaceSource } from 'webpack-sources';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly baseUrl: any = 'https://newsapi.org/v2/top-headlines';
  private readonly apiKey: any = '11bd8767438d43c2ae558338d227fd7a'; /* API key: 11bd8767438d43c2ae558338d227fd7a */

  constructor(private http: HttpClient) { }

  getNews(countryCode: string): Observable<any> {
    let params = new HttpParams();

    params = params.append('country', countryCode);
    params = params.append('apiKey', this.apiKey);
    return this.http
    .get(this.baseUrl, {params}).pipe(map((response: any) => new Article().deserialize(response.articles[0])));
  }

  searchNews(query: string): Observable<Article[]> {
    let params = new HttpParams();

    params = params.append('q', query);
    params = params.append('apiKey', this.apiKey);

    return this.http.get(this.baseUrl, { params }).pipe(
      map((articles: any) => { return articles.articles
      .map((article: Object) => new Article().deserialize(article)); }
    ));
  };
}
