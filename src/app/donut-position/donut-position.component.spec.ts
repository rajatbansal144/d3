import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutPositionComponent } from './donut-position.component';

describe('DonutPositionComponent', () => {
  let component: DonutPositionComponent;
  let fixture: ComponentFixture<DonutPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
