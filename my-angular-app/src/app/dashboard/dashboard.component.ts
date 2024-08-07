import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message: string = '';
  recentResults: any[] = []; // Define recentResults as an array

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRecentResults();
  }

  startTest(): void {
    this.apiService.startTest().subscribe(
      response => {
        this.message = response.result || 'Test started successfully';
        this.getRecentResults();
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
        this.message = response.result || 'Test stopped successfully';
        this.getRecentResults();
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
        this.message = response.result || 'Sensor read successfully';
        this.getRecentResults();
      },
      error => {
        console.error('Error reading sensor', error);
        this.message = 'Error reading sensor';
      }
    );
  }

  getRecentResults(): void {
    this.apiService.getRecentResults().subscribe(
      data => {
        this.recentResults = data;
      },
      error => {
        console.error('Error fetching recent results', error);
      }
    );
  }
}
