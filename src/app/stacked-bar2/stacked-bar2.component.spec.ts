import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBar2Component } from './stacked-bar2.component';

describe('StackedBar2Component', () => {
  let component: StackedBar2Component;
  let fixture: ComponentFixture<StackedBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
