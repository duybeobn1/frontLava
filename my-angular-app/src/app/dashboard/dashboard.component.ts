import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tests: any[] = [];
  valeurCapteurs: any[] = [];
  notifications: any[] = [];
  message: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTests();
    this.loadValeurCapteurs();
    this.loadNotifications();
  }

  loadTests(): void {
    this.apiService.getTests().subscribe(data => {
      this.tests = data;
    });
  }

  loadValeurCapteurs(): void {
    this.apiService.getValeurCapteurs().subscribe(data => {
      this.valeurCapteurs = data;
    });
  }

  loadNotifications(): void {
    this.apiService.getNotifications().subscribe(data => {
      this.notifications = data;
    });
  }

  startTest(): void {
    this.apiService.startTest().subscribe(
      response => {
        this.message = 'Test started successfully';
      },
      error => {
        console.error('Error starting test', error);
        this.message = 'Error starting test';
      }
    );
  }

  stopTest(): void {
    this.apiService.stopTest().subscribe(
      response => {
        this.message = 'Test stopped successfully';
      },
      error => {
        console.error('Error stopping test', error);
        this.message = 'Error stopping test';
      }
    );
  }

  readSensor(): void {
    this.apiService.readSensor().subscribe(
      response => {
        this.message = 'Sensor read successfully: ' + response;
      },
      error => {
        console.error('Error reading sensor', error);
        this.message = 'Error reading sensor';
      }
    );
  }
}
