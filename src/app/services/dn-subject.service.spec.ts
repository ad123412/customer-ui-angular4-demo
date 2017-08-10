import { TestBed, inject } from '@angular/core/testing';

import { DnSubjectService } from './dn-subject.service';

describe('DnSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnSubjectService]
    });
  });

  it('should be created', inject([DnSubjectService], (service: DnSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
