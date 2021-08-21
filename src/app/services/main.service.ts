import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/timeoutWith';
 import { appConfig } from '../../config';


@Injectable()
export class MainService {
	token: any;
	headers: HttpHeaders;
	options: any;
	public auth_key: string;
	public baseUrl: string;
	public base_url_slug: string;
	appSelectorSubscription: Subscription;
	user_app: any;
	constructor(private http: HttpClient, private router: Router) {
		 this.token = JSON.parse(localStorage.getItem('user'));




		 this.baseUrl = appConfig.base_url;

		 this.headers = new HttpHeaders({ 'Authorization': this.token.token });

		this.options = { headers: this.headers, observe: 'response' };

	}


	public getList(url: string): Promise<any> {

		return this.http.get(this.baseUrl + url, this.options)
			.toPromise().then((response: any) => {
				if (response.code === 401) {
					localStorage.clear();
					window.location.reload();

				}
				else {
					return response.body;
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

	public delete(url: string, isSingle?: boolean): Promise<any> {
		return this.http.delete(this.baseUrl + url, this.options)
			.toPromise().then((response: any) => {
				if (response.status === 401) {
					localStorage.clear();
					window.location.reload();

				}
				else {
					return response.body;
				}
			},
				(reason: any) => {
					if (reason.error.status === 401 || reason.error.status === 403) {
						localStorage.clear();
						window.location.reload();
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}

	onLogout(): Promise<any> {
		return this.http.post(this.baseUrl + 'logout', {}, this.options)
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
					if (reason.error.status === 401) {
						localStorage.clear();
						this.router.navigate(['auth/login']);
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}

	postData(endpoint: string, formData: any): Promise<any> {


		return this.http.post(this.baseUrl + endpoint, formData, this.options)
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
					if (reason.error.status === 401) {
						localStorage.clear();
						this.router.navigate(['auth/login']);
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}
	putData(endpoint: string, formData: any): Promise<any> {


		return this.http.put(this.baseUrl + endpoint, formData, this.options)
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
					if (reason.error.status === 401) {
						localStorage.clear();
						this.router.navigate(['auth/login']);
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}

	patch(endpoint: any, formData: any): Promise<any> {
		// this.user_app = this.appSelectorService.getApp();
		// formData['user_app_id'] = this.user_app.user_app_id;

		// console.log(formData);

		return this.http.patch(this.baseUrl + endpoint, formData, this.options)
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
					if (reason.error.status === 401) {
						localStorage.clear();
						this.router.navigate(['auth/login']);
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}

	postFormData(endpoint: string, formData: any): Promise<any> {
		// this.user_app = this.appSelectorService.getApp();
		// formData['user_app_id'] = this.user_app.user_app_id;
		formData.append('user_app_id', this.user_app.user_app_id);

		console.log(formData);

		return this.http.post(this.baseUrl + endpoint, formData, this.options)
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
					if (reason.error.status === 401) {
						localStorage.clear();
						this.router.navigate(['auth/login']);
						return reason;
					}
					return reason;

				}).catch(this.handleError);
	}

	public handleError(error: any): Promise<any> {
		return error;
	}


}