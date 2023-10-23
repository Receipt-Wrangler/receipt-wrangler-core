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

import { FileDataView } from '../model/fileDataView';
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
     * Converts a receipt image to jpg
     * This will convert a receipt image to jpg, [SYSTEM USER]
     * @param file 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public convertToJpgForm(file: Blob, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public convertToJpgForm(file: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public convertToJpgForm(file: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public convertToJpgForm(file: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling convertToJpg.');
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
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
        }

        return this.httpClient.request<string>('post',`${this.basePath}/receiptImage/convertToJpg/`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
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
    public getReceiptImageById(receiptImageId: number, observe?: 'body', reportProgress?: boolean): Observable<FileDataView>;
    public getReceiptImageById(receiptImageId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileDataView>>;
    public getReceiptImageById(receiptImageId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileDataView>>;
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

        return this.httpClient.request<FileDataView>('get',`${this.basePath}/receiptImage/${encodeURIComponent(String(receiptImageId))}`,
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
     * @param file 
     * @param receiptImageId Id of receipt image to perform magic fill on
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public magicFillReceiptForm(file?: Blob, receiptImageId?: number, observe?: 'body', reportProgress?: boolean): Observable<Receipt>;
    public magicFillReceiptForm(file?: Blob, receiptImageId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Receipt>>;
    public magicFillReceiptForm(file?: Blob, receiptImageId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Receipt>>;
    public magicFillReceiptForm(file?: Blob, receiptImageId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
        }

        return this.httpClient.request<Receipt>('post',`${this.basePath}/receiptImage/magicFill`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
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
     * @param file 
     * @param receiptId 
     * @param encodedImage 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadReceiptImageForm(file: Blob, receiptId: number, encodedImage: string, observe?: 'body', reportProgress?: boolean): Observable<FileDataView>;
    public uploadReceiptImageForm(file: Blob, receiptId: number, encodedImage: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileDataView>>;
    public uploadReceiptImageForm(file: Blob, receiptId: number, encodedImage: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileDataView>>;
    public uploadReceiptImageForm(file: Blob, receiptId: number, encodedImage: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadReceiptImage.');
        }

        if (receiptId === null || receiptId === undefined) {
            throw new Error('Required parameter receiptId was null or undefined when calling uploadReceiptImage.');
        }

        if (encodedImage === null || encodedImage === undefined) {
            throw new Error('Required parameter encodedImage was null or undefined when calling uploadReceiptImage.');
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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
        }
        if (receiptId !== undefined) {
            formParams = formParams.append('receiptId', <any>receiptId) as any || formParams;
        }
        if (encodedImage !== undefined) {
            formParams = formParams.append('encodedImage', <any>encodedImage) as any || formParams;
        }

        return this.httpClient.request<FileDataView>('post',`${this.basePath}/receiptImage/`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
