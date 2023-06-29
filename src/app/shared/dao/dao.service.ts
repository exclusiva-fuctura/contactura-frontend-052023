import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenState } from '../security/token.state';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  public static readonly MEDIA_TYPE_APP_JSON = 'application/json';

  constructor(
    private httpClient: HttpClient,
    private tokenState: TokenState
    ) { }

  post<T>(url: string, body: any, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(url, body, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  put<T>(url: string, body: any, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(url, body, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  get<T>(url: string, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(url, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  delete<T>(url: string, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(url, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  private getHeaders(mediaType: string): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', mediaType);
    // se nao existir token nao informar
    if (this.tokenState.getToken()) {
      headers = headers.append('Authorization', `Bearer ${this.tokenState.getToken()}`);
    }

    return headers;
  }
}
