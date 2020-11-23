import { TestBed } from '@angular/core/testing';

import { SkillsEditService } from './skills-edit.service';

describe('SkillsEditService', () => {
  let service: SkillsEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
