import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
      <h1>Employee Details</h1>
      <ul *ngFor="let employee of employees">
            <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
      </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees: any = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees()
         .subscribe(data => this.employees.data);
  }

}
