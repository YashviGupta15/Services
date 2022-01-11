import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {
  constructor() {}

  id: number[] = [1, 2, 3, 4, 5];

  getId(): number[] {
    console.log("Hi");
    return this.id;
  }
}
