import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://api.weatherapi.com/v1/current.json';
  API_KEY = 'c9eb45d9cbfe4370b8045531250102';

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?key=${this.API_KEY}&q=${city}`);
  }
}
