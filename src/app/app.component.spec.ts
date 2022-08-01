import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list/list.component';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'detail/:id', component: ListDetailComponent },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        ListComponent,
        ListDetailComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
