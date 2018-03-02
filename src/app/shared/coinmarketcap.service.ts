import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Coin } from './coin';

@Injectable()
export class CoinMarketCapService {
  private API_PATH: string = 'https://api.coinmarketcap.com/v1/ticker/';
  public loading: boolean = false;
  public initialised: boolean = false;
  public query: string = "";

  result:any;

  constructor(private http: HttpClient) { }

  getList() {
    this.loading = true;
    this.initialised = true;

    return this.http.get<Coin>(`${this.API_PATH}`)
      .map(result => this.result = result)
      .do(_ => this.loading = false)
  }

  // getCoin(query: string) {
  //   this.query = query;
  //   this.loading = true;
  //   this.initialised = true;

  //   return this.http.get<Coin>(`${this.API_PATH}/${this.query}`)
  //     .map(result => this.result = result)
  //     .do(_ => this.loading = false)
  // }
}