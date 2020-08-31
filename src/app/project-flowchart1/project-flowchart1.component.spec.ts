import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFlowchart1Component } from './project-flowchart1.component';

describe('ProjectFlowchart1Component', () => {
  let component: ProjectFlowchart1Component;
  let fixture: ComponentFixture<ProjectFlowchart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFlowchart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFlowchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
