import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetWeatherService } from '../services/get-weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css'],
})
export class WeathersComponent implements OnInit, OnDestroy {
  public clicked = true;
  public weathers;

  constructor(private getWeatherService: GetWeatherService) {
    this.getWeatherService.buttonClick.subscribe((e) => {
      console.log(e);
      this.getWeatherService.getWeather(e).subscribe((data) => {
        this.weathers = [data];
        this.clicked = true;
        // console.log(this.weathers);
      });
    });
  }

  ngOnInit(): void {
    // this.getWeatherService.getWeather('siauliai').subscribe((data) => {
    //   this.weathers = [data];
    //   this.clicked = true;
    //   // console.log(this.weathers);
    // });
  }

  ngOnDestroy() {
    // cia kol programa stebi kol programa gauna tai tai pvz destroyinti turime visada
    this.getWeatherService.buttonClick.unsubscribe();
  }
}
