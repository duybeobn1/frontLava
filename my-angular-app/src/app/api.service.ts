import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://192.168.1.96:8080/api'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getTests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tests`);
  }

  createTest(test: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tests`, test);
  }

  getValeurCapteurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/valeur-capteurs`);
  }

  createValeurCapteur(valeurCapteur: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/valeur-capteurs`, valeurCapteur);
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notifications`);
  }

  createNotification(notification: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications`, notification);
  }
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
