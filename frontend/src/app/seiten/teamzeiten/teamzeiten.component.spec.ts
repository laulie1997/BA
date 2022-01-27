import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamzeitenComponent } from './teamzeiten.component';

describe('TeamzeitenComponent', () => {
  let component: TeamzeitenComponent;
  let fixture: ComponentFixture<TeamzeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamzeitenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamzeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
