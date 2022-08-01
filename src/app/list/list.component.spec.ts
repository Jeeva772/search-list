import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { ListServiceMock } from '../mock/list.service.mock';
import { ListService } from '../services/list.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'detail/:id', component: ListDetailComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, ListDetailComponent],
      imports: [
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ListService, useClass: ListServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have options length', () => {
    expect(component.options.length).toEqual(1);
  });
});
