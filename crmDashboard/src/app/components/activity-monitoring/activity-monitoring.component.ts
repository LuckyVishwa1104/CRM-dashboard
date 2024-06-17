import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-monitoring',
  templateUrl: './activity-monitoring.component.html',
  styleUrls: ['./activity-monitoring.component.css']
})
export class ActivityMonitoringComponent implements OnInit {
  activities: any[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data;
    });
  }
}
