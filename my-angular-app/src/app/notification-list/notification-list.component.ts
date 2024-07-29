import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchNotifications();
  }

  fetchNotifications() {
    // Call the API to get the list of notifications
  }
}
