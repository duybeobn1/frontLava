import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://192.168.1.96:6822/api'; // Ensure this is the correct URL

  constructor(private http: HttpClient) { }

  getSensors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sensors`);
  }

  getTests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tests`);
  }

  createTest(test: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tests`, test);
  }

  getValeurCapteurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/valeur-capteur`);
  }

  createValeurCapteur(valeurCapteur: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/valeur-capteur`, valeurCapteur);
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

  getStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tests/status`);
  }
}
