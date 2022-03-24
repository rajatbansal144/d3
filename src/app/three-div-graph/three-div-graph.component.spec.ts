import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDivGraphComponent } from './three-div-graph.component';

describe('ThreeDivGraphComponent', () => {
  let component: ThreeDivGraphComponent;
  let fixture: ComponentFixture<ThreeDivGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDivGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDivGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
