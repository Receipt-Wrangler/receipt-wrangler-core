import { UserPreferences } from '../api/model/userPreferences';
import { User } from '../api/model/user';

export interface AuthStateInterface {
  userId?: string;
  displayname?: string;
  username?: string;
  expirationDate?: string;
  userRole?: User.UserRoleEnum;
  defaultAvatarColor?: string;
  userPreferences?: UserPreferences;
}
