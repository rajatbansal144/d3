import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugePositionComponent } from './gauge-position.component';

describe('GaugePositionComponent', () => {
  let component: GaugePositionComponent;
  let fixture: ComponentFixture<GaugePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
