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
import { GroupSettingsWhiteListEmail } from './groupSettingsWhiteListEmail';
import { SubjectLineRegex } from './subjectLineRegex';

export interface UpdateGroupSettingsCommand { 
    /**
     * Whether email integration is enabled
     */
    emailIntegrationEnabled?: boolean;
    /**
     * Email to read
     */
    emailToRead: string;
    /**
     * Subject line regexes
     */
    subjectLineRegexes: Array<SubjectLineRegex>;
    /**
     * Email white list
     */
    emailWhiteList: Array<GroupSettingsWhiteListEmail>;
}