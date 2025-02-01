import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  city: string = '';
  title: string = 'weather app';
  displayCity: string = '';
  displayRegionCountry: string = '';
  image: string = '';
  temp_c: string = '';
  windspeed: string = '';
  humidity: string = '';

  ngOnInit(): void {
    this.checkWeather();
  }

  setCity(event: any) {
    this.city = event.target.value;
    if (this.city == '') {
      this.reset();
    }
  }

  checkWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      console.log(data);
      this.displayCity = `${data.location.name}`;
      this.displayRegionCountry = `${data.location.region}, ${data.location.country}`;
      this.image = data.current.condition.icon;
      this.temp_c = `Temperature: ${data.current.temp_c}°C`;
      this.windspeed = `Windspeed: ${data.current.wind_kph}km/h`;
      this.humidity = `Humidity: ${data.current.humidity}%`;
    });
  }
  reset() {
    this.city = '';
    this.displayCity = '';
    this.displayRegionCountry = '';
    this.image = '';
    this.temp_c = '';
    this.windspeed = '';
    this.humidity = '';
  }
}
