import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://192.168.1.96:8080/api'; // Ensure this is the correct URL

  constructor(private http: HttpClient) { }

  startTest(): Observable<any> {
    return this.http.post(`${this.baseUrl}/tests`, { command: 'start' });
  }

  stopTest(): Observable<any> {
    return this.http.post(`${this.baseUrl}/tests`, { command: 'stop' });
  }

  readSensor(): Observable<any> {
    return this.http.post(`${this.baseUrl}/tests`, { command: 'read' });
  }

  getRecentResults(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tests/recent`);
  }
}
