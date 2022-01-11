import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <p> This is from Hello: {{numArray}} </p>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  numArray: number[];

  constructor(private service: EmployeesService) {}

  ngOnInit() {
    this.numArray = this.service.getId();
  }
}
