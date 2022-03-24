import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gauge2Component } from './gauge2.component';

describe('Gauge2Component', () => {
  let component: Gauge2Component;
  let fixture: ComponentFixture<Gauge2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gauge2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gauge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
