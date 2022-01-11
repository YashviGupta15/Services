import { Component, OnInit, VERSION } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  numArray: number[];

  constructor(private service: EmployeesService) {}

  ngOnInit() {
    this.numArray = this.service.getId();
  }
}
