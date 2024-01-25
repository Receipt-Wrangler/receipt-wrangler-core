/**
 * Receipt Wrangler API.
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Group } from './group';
import { UserPreferences } from './userPreferences';
import { UserView } from './userView';

export interface AppData { 
    /**
     * User's claims
     */
    claims: any;
    /**
     * Groups in the system
     */
    groups: Array<Group>;
    /**
     * Users in the system
     */
    users: Array<UserView>;
    /**
     * User preferences in the system
     */
    userPreferences: Array<UserPreferences>;
    /**
     * JWT token
     */
    jwt?: string;
    /**
     * Refresh token
     */
    refreshToken?: string;
}