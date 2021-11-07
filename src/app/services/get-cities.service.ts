import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetCitiesService {
  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get<Object>('assets/cities.json');
  }
}
