import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionStepsExampleComponent } from './expansion-steps-example.component';

describe('ExpansionStepsExampleComponent', () => {
  let component: ExpansionStepsExampleComponent;
  let fixture: ComponentFixture<ExpansionStepsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionStepsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionStepsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
