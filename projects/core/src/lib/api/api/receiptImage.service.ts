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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { EncodedImage } from '../model/encodedImage';
import { FileData } from '../model/fileData';
import { Receipt } from '../model/receipt';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReceiptImageService {

    protected basePath = '/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete receipt image
     * This will delete a receipt image by id [SYSTEM USER]
     * @param receiptImageId Id of receipt image to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteReceiptImageById(receiptImageId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteReceiptImageById(receiptImageId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteReceiptImageById(receiptImageId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteReceiptImageById(receiptImageId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (receiptImageId === null || receiptImageId === undefined) {
            throw new Error('Required parameter receiptImageId was null or undefined when calling deleteReceiptImageById.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/receiptImage/${encodeURIComponent(String(receiptImageId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get receipt image
     * This will get a receipt image by id, [SYSTEM USER]
     * @param receiptImageId Id of receipt image to get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getReceiptImageById(receiptImageId: number, observe?: 'body', reportProgress?: boolean): Observable<EncodedImage>;
    public getReceiptImageById(receiptImageId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EncodedImage>>;
    public getReceiptImageById(receiptImageId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EncodedImage>>;
    public getReceiptImageById(receiptImageId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (receiptImageId === null || receiptImageId === undefined) {
            throw new Error('Required parameter receiptImageId was null or undefined when calling getReceiptImageById.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<EncodedImage>('get',`${this.basePath}/receiptImage/${encodeURIComponent(String(receiptImageId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Reads a receipt image and returns the parsed results
     * This will parse and read a receipt image, [SYSTEM USER]
     * @param receiptImageId Id of receipt image to perform magic fill on
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public magicFillReceipt(receiptImageId: number, observe?: 'body', reportProgress?: boolean): Observable<Receipt>;
    public magicFillReceipt(receiptImageId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Receipt>>;
    public magicFillReceipt(receiptImageId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Receipt>>;
    public magicFillReceipt(receiptImageId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (receiptImageId === null || receiptImageId === undefined) {
            throw new Error('Required parameter receiptImageId was null or undefined when calling magicFillReceipt.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (receiptImageId !== undefined && receiptImageId !== null) {
            queryParameters = queryParameters.set('receiptImageId', <any>receiptImageId);
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Receipt>('get',`${this.basePath}/receiptImage/magicFill`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Uploads a receipt image
     * This will upload a receipt image, [SYSTEM USER]
     * @param body Receipt image to upload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadReceiptImage(body: FileData, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public uploadReceiptImage(body: FileData, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public uploadReceiptImage(body: FileData, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public uploadReceiptImage(body: FileData, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling uploadReceiptImage.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/receiptImage/`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
