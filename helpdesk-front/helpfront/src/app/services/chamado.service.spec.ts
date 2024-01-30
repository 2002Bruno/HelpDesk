import { TestBed } from '@angular/core/testing';

import { ChamadoService } from './chamado.service';
import { HttpClientModule } from "@angular/common/http";

describe('ChamadoService', () => {
  let service: ChamadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(ChamadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
