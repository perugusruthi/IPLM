import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectPopupComponent } from './list-project-popup.component';

describe('ListProjectPopupComponent', () => {
  let component: ListProjectPopupComponent;
  let fixture: ComponentFixture<ListProjectPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjectPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
