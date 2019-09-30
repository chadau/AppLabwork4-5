import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Meteo } from '../models/meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

private readonly apiKey: string  = '3481483743ad645cbdb84b425581d2f1';
private readonly baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) { }

  getMeteo(city: string, countryCode: string, units: string = 'metric'): Observable<Meteo> {
    let params = new HttpParams();

    params = params.append('q', city + ',' + countryCode);
    params = params.append('units', units);
    params = params.append('appid', this.apiKey);
    return this.httpClient
    .get(this.baseUrl, {params}).pipe(map(response => new Meteo().deserialize(response)));
  }
}
