import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private coinApi = "https://api.coingecko.com/api/v3/coins/"
  public coins = [];
  public switchList: string[] = [];

  constructor(private httpClient: HttpClient) {   }
  get(): Observable<any>{
    return this.httpClient.get(this.coinApi)
    .pipe(tap(r => this.coins = r));
  }
  getInfo(id): Observable<any>{
    return this.httpClient.get(this.coinApi+id);
  }
}

  

