import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gauge3Component } from './gauge3.component';

describe('Gauge3Component', () => {
  let component: Gauge3Component;
  let fixture: ComponentFixture<Gauge3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gauge3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gauge3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
