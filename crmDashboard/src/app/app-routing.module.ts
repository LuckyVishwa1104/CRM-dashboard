import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectMonitoringComponent } from './components/project-monitoring/project-monitoring.component';
import { ActivityMonitoringComponent } from './components/activity-monitoring/activity-monitoring.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project-monitoring', component: ProjectMonitoringComponent },
  { path: 'activity-monitoring', component: ActivityMonitoringComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
