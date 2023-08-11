import { TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { FeatureGuard } from './feature.guard';
import { FeatureConfigState } from '../store/feature-config.state';

describe('FeatureGuard', () => {
  let guard: FeatureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FeatureConfigState])],
    });
    guard = TestBed.inject(FeatureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
