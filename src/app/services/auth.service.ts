
import { Injectable } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
// import 'rxjs/add/operator/map';
import { appConfig } from '../../config';


import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';



@Injectable()
export class AuthService {
    headers: HttpHeaders;
    options: any;
    public auth_key: string;
    public baseUrl: string;
    public default_base_url:string;
    token: any;


    constructor(private http: HttpClient, private router: Router) {
        this.token = localStorage.getItem('admin_token');
        this.baseUrl = appConfig.base_url;
        this.default_base_url=appConfig.default_base_url
        // this.headers = new HttpHeaders({ 'Authorization': appConfig.default_auth_key });
        // this.options = { headers: this.headers, observe: 'response' };

    }
    public genrateOtp(formData: any): Observable<any> {
        return this.http.post(this.baseUrl + 'generateOTP', formData)

    }

    public login(formData: any): Observable<any> {
        return this.http.post(this.baseUrl + 'login', formData)

    }
    logout(): Observable<any> {
        return this.http.post(this.baseUrl + 'logout', {}, { headers: { Authorization: this.token } });
    }
    postData(endpoint: string, formData: any): Promise<any> {


		return this.http.post(this.baseUrl + endpoint, formData)
			.toPromise().then((response: any) => {
				if (response.status === 401) {
					localStorage.clear();
					this.router.navigate(['auth/login']);
				}
				else {
					return response;
				}
			},
				(reason: any) => {
					if (reason.error.status === 401) {
						localStorage.clear();
						this.router.navigate(['auth/login']);
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}
    public getList(url: string): Promise<any> {

		return this.http.get(this.default_base_url + url)
			.toPromise().then((response: any) => {
				if (response.code === 401) {
					localStorage.clear();
					window.location.reload();

				}
				else {
					return response;
				}
			},
				(reason: any) => {
					if (reason.error.code === 401 || reason.error.status === 403) {
						localStorage.clear();
						window.location.reload();
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}

    // public sendMT(formData: any): Promise<any>
    // {
    //     return this.http.post('http://18.184.164.213/up_qatar/api/v1/subscription/sendMT', formData, this.options)
    //     .toPromise().then((response: any) =>
    //     {
    //         let result: any = response.body;
    //         console.log('Service Call', result);
    //         return result;
    //     },
    //     (reason: any) =>
    //     {
    //         return reason;
    //     }).catch(this.handleError);
    // }

    public forgotPassword(formData: any): Promise<any> {
        return this.http.post(this.baseUrl + 'send_email', formData, this.options)
            .toPromise().then((response: any) => {
                let result: any = response.body;
                return result;
            },
                (reason: any) => {
                    return reason;
                }).catch(this.handleError);
    }

    public resetPassword(url: any, formData: any): Promise<any> {
        return this.http.patch(this.baseUrl + 'update_password/' + url, formData, this.options)
            .toPromise().then((response: any) => {
                let result: any = response.body;
                return result;
            },
                (reason: any) => {
                    return reason;
                }).catch(this.handleError);
    }

    public recoveryCode(formData: any): Promise<any> {
        return this.http.post(this.baseUrl + 'verify_code', formData, this.options)
            .toPromise().then((response: any) => {
                let result: any = response.body;
                return result;
            },
                (reason: any) => {
                    return reason;
                }).catch(this.handleError);
    }

    public getMethod(params: string): Promise<any> {
        return this.http.get(this.baseUrl + params, this.options)
            .toPromise().then((response: any) => {
                if (response.status === 401) {
                    localStorage.clear();
                    this.router.navigate(['auth/login']);
                }
                else {
                    return response.body;
                }
            },
                (reason: any) => {
                    return reason;
                }).catch(this.handleError);
    }

    public handleError(error: any): Promise<any> {
        // console.log("handleError = " + error);
        return error;
    }

}

