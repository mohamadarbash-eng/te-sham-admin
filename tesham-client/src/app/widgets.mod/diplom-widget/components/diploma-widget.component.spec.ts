import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaWidgetComponent } from './diploma-widget.component';

describe('DiplomWidgetComponent', () => {
  let component: DiplomaWidgetComponent;
  let fixture: ComponentFixture<DiplomaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
