import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomWidgetComponent } from './diplom-widget.component';

describe('DiplomWidgetComponent', () => {
  let component: DiplomWidgetComponent;
  let fixture: ComponentFixture<DiplomWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
