import { TestBed } from '@angular/core/testing';

import { BlogDetail } from './blog-detail';

describe('BlogDetail', () => {
  let service: BlogDetail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDetail);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
