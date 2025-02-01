import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.weatherapi.com/v1/current.json';
  API_KEY = environment.weatherApiKey;

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?key=${this.API_KEY}&q=${city}`);
  }
}
