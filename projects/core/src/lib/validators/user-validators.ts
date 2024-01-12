import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { UserService } from '../api/api/user.service';

@Injectable()
export class UserValidators {
  constructor(private userService: UserService) {}

  public uniqueUsername(
    threshold: number,
    originalValue: string
  ): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return this.userService.getUsernameCount(control.value).pipe(
        map((usernameCount) => {
          if (usernameCount > threshold && control.value !== originalValue) {
            return { duplicate: true };
          }
          return null;
        })
      );
    };
  }
}
