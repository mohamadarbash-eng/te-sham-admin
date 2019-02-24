import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWeWidgetComponent } from './why-we-widget.component';

describe('WhyWeWidgetComponent', () => {
  let component: WhyWeWidgetComponent;
  let fixture: ComponentFixture<WhyWeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyWeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyWeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
