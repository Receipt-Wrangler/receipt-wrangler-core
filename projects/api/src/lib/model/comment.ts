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

/**
 * User comment left on receipts
 */
export interface Comment { 
    /**
     * Additional information about the comment
     */
    additionalInfo?: string;
    /**
     * Comment itself
     */
    comment: string;
    /**
     * Comment foreign key used for repleis
     */
    commentId?: number;
    createdAt?: string;
    createdBy?: number;
    id: number;
    /**
     * Receipt foreign key
     */
    receiptId: number;
    /**
     * Comment's replies
     */
    replies: Array<Comment>;
    updatedAt?: string;
    /**
     * User foreign key
     */
    userId: number;
}