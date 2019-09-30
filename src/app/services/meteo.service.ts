import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public baseUrl: any = 'https://newsapi.org/v2/';
  public country: any = 'country=in';
  public apiKey: any = '&apiKey=11bd8767438d43c2ae558338d227fd7a';/* API key: 11bd8767438d43c2ae558338d227fd7a */
  constructor(private http: HttpClient) { }

  getNews() {
    const url = this.baseUrl + 'top-headlines?' + this.country + this.apiKey;
    return this.http.get(url);
  }

  getNewbyCategory(category) {
    const url = this.baseUrl + 'top-headlines?' + this.country + '&category=' + category + this.apiKey;
    return this.http.get(url);
  }
}
