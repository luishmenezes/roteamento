import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './all.guard';

describe('allGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
function allGuard(arg0: import("@angular/router").RouterStateSnapshot | import("@angular/router").ActivatedRouteSnapshot): any {
  throw new Error('Function not implemented.');
}

