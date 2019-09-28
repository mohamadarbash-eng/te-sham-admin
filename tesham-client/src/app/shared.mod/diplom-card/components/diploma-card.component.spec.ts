import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaCardComponent } from './diploma-card.component';

describe('DiplomCardComponent', () => {
  let component: DiplomaCardComponent;
  let fixture: ComponentFixture<DiplomaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
