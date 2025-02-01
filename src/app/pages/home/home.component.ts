import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title: string = 'weather app';
  city: string = '';
  displayCity: string = '';
  setCity(event: any) {
    this.city = event.target.value;
    if (event.target.value == '') {
      this.city = '';
      this.displayCity = '';
    }
  }
  showCity() {
    this.displayCity = this.city;
  }
}
