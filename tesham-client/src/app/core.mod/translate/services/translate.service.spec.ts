import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';



describe('TranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    expect(service).toBeTruthy();
  });
});
