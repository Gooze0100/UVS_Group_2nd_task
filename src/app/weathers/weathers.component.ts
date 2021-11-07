import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetWeatherService } from '../services/get-weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css'],
})
export class WeathersComponent implements OnInit, OnDestroy {
  public clicked = false;
  public weathers;

  constructor(private getWeatherService: GetWeatherService) {
    this.getWeatherService.buttonClick.subscribe((e) => {
      this.getWeatherService.getWeather(e).subscribe((data) => {
        this.weathers = [data];
        this.clicked = true;
      });
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.getWeatherService.buttonClick.unsubscribe();
  }
}
