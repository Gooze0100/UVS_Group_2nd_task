import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  public buttonClick = new Subject();

  constructor(private http: HttpClient) {}

  getWeather(city) {
    return this.http.get<Object>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=6765b42e098de368f1ef09ee8c3f08eb&units=metric`
    );
  }
}
