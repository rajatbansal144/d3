import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfDonutPositionComponent } from './half-donut-position.component';

describe('HalfDonutPositionComponent', () => {
  let component: HalfDonutPositionComponent;
  let fixture: ComponentFixture<HalfDonutPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfDonutPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfDonutPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
