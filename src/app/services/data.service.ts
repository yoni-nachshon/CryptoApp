import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coinsModel } from '../models/coins-model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private coinApi = "https://api.coingecko.com/api/v3/coins/"
  coinList: coinsModel[] = [];
  switchList: string[] = [];

  constructor(private httpClient: HttpClient) {   }
  get(): Observable<any>{
    return this.httpClient.get(this.coinApi);
    
  }
  getInfo(id): Observable<any>{
    return this.httpClient.get(this.coinApi+id);
  }
}

  

