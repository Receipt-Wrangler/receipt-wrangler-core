import { UserRoleEnum } from "../api";
import { UserPreferences } from "../api/model/userPreferences";

export interface AuthStateInterface {
  userId?: string;
  displayname?: string;
  username?: string;
  expirationDate?: string;
  userRole?: UserRoleEnum;
  defaultAvatarColor?: string;
  userPreferences?: UserPreferences;
}
