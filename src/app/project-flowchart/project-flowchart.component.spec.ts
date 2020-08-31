import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFlowchartComponent } from './project-flowchart.component';

describe('ProjectFlowchartComponent', () => {
  let component: ProjectFlowchartComponent;
  let fixture: ComponentFixture<ProjectFlowchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFlowchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
