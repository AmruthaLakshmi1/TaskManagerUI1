import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { Task } from 'src/app/Models/task';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });

});
