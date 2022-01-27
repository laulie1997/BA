import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlaubComponent } from './urlaub.component';

describe('UrlaubComponent', () => {
  let component: UrlaubComponent;
  let fixture: ComponentFixture<UrlaubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlaubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlaubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
