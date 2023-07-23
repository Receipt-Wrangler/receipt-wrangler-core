import { AuthStateInterface } from './auth-state.interface';

export class SetAuthState {
  static readonly type = '[Auth] Set Auth State';

  constructor(public userClaims: AuthStateInterface) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
