import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestGameStatsService {

  constructor(private httpClient: HttpClient) { }


  public ResolveGetRequest(url) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public ResolveGetRequestObservable(url): Observable<any> {
      return this.httpClient.get(url).pipe(map(this.extractData));
  }

  public ResolvePostRequest(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, params)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public GetBodyAnswer(data) {
    const answerStringify = JSON.stringify(data);
    const answerStringifyParce = JSON.parse(answerStringify);
    const resData = JSON.parse(answerStringifyParce._body);
    const code = answerStringifyParce.status;
    return resData;
  }

  public GetBodyAnswerHttpClient(data) {
    const answerStringify = JSON.stringify(data);
    const answerStringifyParce = JSON.parse(answerStringify);
    return answerStringifyParce;
  }

  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    return myHeaders;
  }

  private extractData(res: Response) {
  let body = res;
  return body || { };
}

}
