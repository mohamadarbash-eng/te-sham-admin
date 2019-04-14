import { TestBed } from '@angular/core/testing';

import { ModalHandleErrorService } from './modal-handle-error.service';

describe('ModalHandleErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalHandleErrorService = TestBed.get(ModalHandleErrorService);
    expect(service).toBeTruthy();
  });
});
