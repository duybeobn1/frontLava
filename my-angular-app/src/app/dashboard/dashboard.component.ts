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
}
