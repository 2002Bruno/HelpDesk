import { TestBed } from '@angular/core/testing';

import { TecnicoService } from './tecnico.service';
import { HttpClientModule } from "@angular/common/http";

describe('TecnicoService', () => {
  let service: TecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(TecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
