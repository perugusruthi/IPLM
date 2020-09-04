import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListFlowchartComponent } from './projects-list-flowchart.component';

describe('ProjectsListComponent', () => {
  let component: ProjectsListFlowchartComponent;
  let fixture: ComponentFixture<ProjectsListFlowchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsListFlowchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
