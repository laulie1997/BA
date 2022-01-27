import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbwesenheitComponent } from './abwesenheit.component';

describe('AbwesenheitComponent', () => {
  let component: AbwesenheitComponent;
  let fixture: ComponentFixture<AbwesenheitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbwesenheitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbwesenheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
