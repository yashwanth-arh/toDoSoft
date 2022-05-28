import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoMainPageComponent } from './to-do-main-page.component';

describe('ToDoMainPageComponent', () => {
  let component: ToDoMainPageComponent;
  let fixture: ComponentFixture<ToDoMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
