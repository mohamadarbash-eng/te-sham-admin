import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomCardComponent } from './diplom-card.component';

describe('DiplomCardComponent', () => {
  let component: DiplomCardComponent;
  let fixture: ComponentFixture<DiplomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
