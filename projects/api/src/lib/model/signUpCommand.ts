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

export interface SignUpCommand { 
    /**
     * User's username
     */
    username: string;
    /**
     * User's password
     */
    password: string;
    /**
     * User's displayname
     */
    displayName?: string;
    /**
     * Whether the user is a dummy user
     */
    isDummyUser?: boolean;
    /**
     * User's role
     */
    userRole?: boolean;
}