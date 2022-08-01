import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getListItem () : Observable<any>{
    return this.http.get('http://localhost:3000/teams').pipe(map(res => res));
  }
}
