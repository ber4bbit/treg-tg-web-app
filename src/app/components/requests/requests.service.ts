import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

enum ApiUrlsEnum {
	API_URL = 'https://treg-web.ru/api',
	GET_ALL_REQUESTS = ApiUrlsEnum.API_URL + '/get-all-requests'
}

@Injectable({
	providedIn: 'root'
})
export class RequestsService {
	constructor(
		@Inject(HttpClient) private http: HttpClient
	) { }

	getAllRequests(): Observable<any[]> {
		return this.http.get<any[]>(ApiUrlsEnum.GET_ALL_REQUESTS)
	}
}
