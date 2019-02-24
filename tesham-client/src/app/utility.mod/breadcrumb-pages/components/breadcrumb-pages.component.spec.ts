import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbPagesComponent } from './breadcrumb-pages.component';

describe('BreadcrumbPagesComponent', () => {
  let component: BreadcrumbPagesComponent;
  let fixture: ComponentFixture<BreadcrumbPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
