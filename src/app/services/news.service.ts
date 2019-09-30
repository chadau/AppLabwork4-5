import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public baseUrl: any = 'https://newsapi.org/v2/';
  public country: any = 'country=in';
  public apiKey: any = '&apiKey=11bd8767438d43c2ae558338d227fd7a'; /* API key: 11bd8767438d43c2ae558338d227fd7a */

  constructor(private http: HttpClient) { }
}
