import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitsuebersichtComponent } from './arbeitsuebersicht.component';

describe('ArbeitsuebersichtComponent', () => {
  let component: ArbeitsuebersichtComponent;
  let fixture: ComponentFixture<ArbeitsuebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbeitsuebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbeitsuebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
