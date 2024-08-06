import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message: string = '';
  sensorStatus: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSensorStatus();
  }

  startTest(): void {
    this.apiService.startTest().subscribe(
      response => {
        this.message = 'Test started successfully';
        this.getSensorStatus();
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
        this.getSensorStatus();
      },
      error => {
        console.error('Error stopping test', error);
        this.message = 'Error stopping test';
      }
    );
  }

  getSensorStatus(): void {
    this.apiService.getStatus().subscribe(
      response => {
        this.sensorStatus = response;
      },
      error => {
        console.error('Error fetching sensor status', error);
      }
    );
  }
}
