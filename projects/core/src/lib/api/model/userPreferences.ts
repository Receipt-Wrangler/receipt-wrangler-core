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

export interface UserPreferences { 
    /**
     * User preferences id
     */
    id: number;
    /**
     * User foreign key
     */
    userId: number;
    /**
     * Group foreign key
     */
    quickScanDefaultGroupId?: number;
    /**
     * User foreign key
     */
    quickScanDefaultPaidById?: number;
    /**
     * Default quick scan status
     */
    quickScanDefaultStatus?: UserPreferences.QuickScanDefaultStatusEnum;
}
export namespace UserPreferences {
    export type QuickScanDefaultStatusEnum = 'OPEN' | 'NEEDS_ATTENTION' | 'RESOLVED' | 'DRAFT';
    export const QuickScanDefaultStatusEnum = {
        OPEN: 'OPEN' as QuickScanDefaultStatusEnum,
        NEEDSATTENTION: 'NEEDS_ATTENTION' as QuickScanDefaultStatusEnum,
        RESOLVED: 'RESOLVED' as QuickScanDefaultStatusEnum,
        DRAFT: 'DRAFT' as QuickScanDefaultStatusEnum
    };
}