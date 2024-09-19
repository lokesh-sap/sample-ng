import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-activity',
  templateUrl: './employee-activity.component.html',
  styleUrls: ['./employee-activity.component.css'] 
})
export class EmployeeActivityComponent implements OnInit {
  images: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  private fetchImages() {
    this.employeeService.fetchImages().subscribe(data => {
      this.images = data;
    });
  }
}
