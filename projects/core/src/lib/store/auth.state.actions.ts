import { UserPreferences } from '../api/model/userPreferences';
import { AuthStateInterface } from './auth-state.interface';

export class SetAuthState {
  static readonly type = '[Auth] Set Auth State';

  constructor(public userClaims: AuthStateInterface) {}
}

export class SetUserPreferences {
  static readonly type = '[Auth] Set User PReferences';

  constructor(public userPreferences: UserPreferences) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
