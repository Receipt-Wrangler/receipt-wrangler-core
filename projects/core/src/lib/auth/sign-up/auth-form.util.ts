import { inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../api';
import { GroupState } from '../../store';
import { AppInitService, SnackbarService } from '../../services';

export class AuthFormUtil {
  public static getSubmitObservable(
    form: FormGroup,
    isSignUp: boolean
  ): Observable<void> {
    const authService: AuthService = inject(AuthService);
    const snackbarService: SnackbarService = inject(SnackbarService);
    const appInitService: AppInitService = inject(AppInitService);

    const isValid = form.valid;

    if (isValid && isSignUp) {
      return authService.signUp(form.value).pipe(
        tap(() => {
          snackbarService.success('User successfully signed up');
        }),
        catchError((err) =>
          of(snackbarService.error(err.error['username'] ?? err['errMsg']))
        )
      );
    } else if (isValid && !isSignUp) {
      return authService.login(form.value).pipe(
        tap(() => {
          snackbarService.success('Successfully logged in');
        }),
        switchMap(() => appInitService.getAppData()),
        map(() => undefined)
      );
    } else {
      return of(undefined);
    }
  }
}
