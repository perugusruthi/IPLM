import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRealFlowchartComponent } from './project-real-flowchart.component';

describe('ProjectRealFlowchartComponent', () => {
  let component: ProjectRealFlowchartComponent;
  let fixture: ComponentFixture<ProjectRealFlowchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRealFlowchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRealFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
