import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePositionComponent } from './pie-position.component';

describe('PiePositionComponent', () => {
  let component: PiePositionComponent;
  let fixture: ComponentFixture<PiePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
