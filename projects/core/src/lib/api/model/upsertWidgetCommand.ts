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

export interface UpsertWidgetCommand { 
    /**
     * Widget name
     */
    name?: string;
    /**
     * Type of widget
     */
    widgetType: UpsertWidgetCommand.WidgetTypeEnum;
    /**
     * Configuration of widget
     */
    configuration?: { [key: string]: any; };
}
export namespace UpsertWidgetCommand {
    export type WidgetTypeEnum = 'GROUP_SUMMARY' | 'FILTERED_RECEIPTS';
    export const WidgetTypeEnum = {
        GROUPSUMMARY: 'GROUP_SUMMARY' as WidgetTypeEnum,
        FILTEREDRECEIPTS: 'FILTERED_RECEIPTS' as WidgetTypeEnum
    };
}