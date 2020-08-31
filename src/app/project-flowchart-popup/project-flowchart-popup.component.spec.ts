import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFlowchartPopupComponent } from './project-flowchart-popup.component';

describe('ProjectFlowchartPopupComponent', () => {
  let component: ProjectFlowchartPopupComponent;
  let fixture: ComponentFixture<ProjectFlowchartPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFlowchartPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFlowchartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
