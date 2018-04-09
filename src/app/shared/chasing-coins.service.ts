import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChasingCoinsService {
  private API_PATH: string = 'https://chasing-coins.com/api/v1/';
  public query: string = "";
  result;
  
  constructor(private http: HttpClient) { }

  getCoinHeat(query) {
    this.query = query;
    return this.http.get(`${this.API_PATH}std/coinheat/${this.query}`)
    .map(result => this.result = result)
  }
}
