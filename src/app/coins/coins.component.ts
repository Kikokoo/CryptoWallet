import { Component, OnInit, ViewChild } from '@angular/core';
import { CoinMarketCapService } from '../shared/coinmarketcap.service';

import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort} from '@angular/material';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  cryptos: any;
  selected = 'USD';

  displayedColumns = ['rank', 'id', 'symbol', 'price_usd', 'percent_change_24h'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    
  }
  
  constructor(private CoinMarketCapService: CoinMarketCapService) { }

  ngOnInit() {
    this.CoinMarketCapService.getList()
    .subscribe(res => {
      this.cryptos = res;

      this.dataSource = new MatTableDataSource(this.cryptos);
      this.dataSource.sort = this.sort;
    });
  }

  onChange(val) {
    console.log(val)
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private CoinMarketCapService: CoinMarketCapService) {
    super();
  }
  connect(): Observable<any> {
    return this.CoinMarketCapService.getList();
  }
  disconnect() {}
}


export interface Coin {
  rank: string;
  id: number;
  symbol: number;
  price_usd: string;
  percent_change_24h: number;
}
