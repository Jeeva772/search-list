import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, startWith, tap, map } from 'rxjs';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  options: any[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  loading: boolean = false;
  listData: any;
  constructor(private router: Router, private listService: ListService) {}
  ngOnInit() {
    this.listService.getListItem().subscribe((data) => {
      this.listData = data;
      this.options = data.map((val: any) => {
        return val.name;
      });
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      tap(() => {
        this.loading = true;
      }),
      map((value) => this._filter(value || ''))
    );
  }
  getOption(val: string) {
    let id = this.listData.findIndex((item: any) => item.name == val);
    this.router.navigate(['detail', this.listData[id].id]);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.loading = false;
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
