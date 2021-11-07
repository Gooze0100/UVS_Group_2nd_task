import { Component, OnInit } from '@angular/core';
import { GetCitiesService } from '../services/get-cities.service';
import { GetWeatherService } from '../services/get-weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  public cities;

  constructor(
    private getCityService: GetCitiesService,
    private getWeatherService: GetWeatherService
  ) {}

  ngOnInit(): void {
    this.getCityService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }

  onClick(city) {
    this.getWeatherService.buttonClick.next(city);
  }
}
