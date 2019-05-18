import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDiplomaComponent } from './details-diploma.component';

describe('DetailsDiplomaComponent', () => {
  let component: DetailsDiplomaComponent;
  let fixture: ComponentFixture<DetailsDiplomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDiplomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
