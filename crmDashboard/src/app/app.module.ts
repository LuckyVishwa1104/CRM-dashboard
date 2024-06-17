import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectMonitoringComponent } from './components/project-monitoring/project-monitoring.component';
import { ActivityMonitoringComponent } from './components/activity-monitoring/activity-monitoring.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectMonitoringComponent,
    ActivityMonitoringComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []  // Removed standalone AppComponent as per previous steps
})
export class AppModule { }
