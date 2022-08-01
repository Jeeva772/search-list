import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ListServiceMock {
  mockData: any = [{
    id: 1,
    name: 'FC Barcelona',
    coach: 'Ernesto Valverde',
    description: 'The best football team in the world!',
  }];
  constructor() {}
  getListItem(): Observable<any> {
    return of(this.mockData);
  }
}
