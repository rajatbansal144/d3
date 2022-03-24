import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarPositionComponent } from './stacked-bar-position.component';

describe('StackedBarPositionComponent', () => {
  let component: StackedBarPositionComponent;
  let fixture: ComponentFixture<StackedBarPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBarPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBarPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
