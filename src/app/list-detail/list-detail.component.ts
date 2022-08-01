import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
})
export class ListDetailComponent implements OnInit {
  id: any;
  private sub: any;
  details: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.listService.getListItem().subscribe((data) => {
        console.log(data);
        this.details = data.filter(
          (val: any) => val.id === parseInt(params['id'])
        )[0];
        console.log(this.details);
      });
      console.log(this.id);
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
