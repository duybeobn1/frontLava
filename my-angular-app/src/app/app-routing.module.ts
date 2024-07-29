import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestListComponent } from './test-list/test-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test-management', component: TestListComponent },
  { path: 'notification-list', component: NotificationListComponent },
  { path: 'sensor-data', component: SensorDataComponent }, // Add this line
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
