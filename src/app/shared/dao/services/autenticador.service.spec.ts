import { TestBed } from '@angular/core/testing';

import { AutenticadorService } from './autenticador.service';

describe('AutenticadorService', () => {
  let service: AutenticadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
