import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Coin } from '../shared/coin';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort} from '@angular/material';

import { CoinMarketCapService } from '../shared/coinmarketcap.service';
import { AuthService } from '../shared/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  dataSource;
 
  itemValue = '';
  items: Observable<any[]>;
  displayedColumns = ['Coin', 'Amount', 'Buy Price', 'Current Price', '24h Change', '7d Change', 'Profit', 'Delete'];
  @ViewChild(MatSort) sort: MatSort;
  coin = '';
  amount = '';
  price = '';

  hol;
  chart;

  pop;
 
  listCoinID = [];

  constructor(public db: AngularFireDatabase,  private auth: AuthService, private http: HttpClient, private CoinMarketCapService: CoinMarketCapService) {
    this.items = db.list(`/items/${this.auth.currentUserId}`).valueChanges();
    this.auth.getList();

    this.CoinMarketCapService.getList()
    .subscribe(res => {
      for(let i = 0; i < 100; i++){
        this.listCoinID.push(res[i].id);
      }
      console.log(this.listCoinID )})
      
  }
 
  onSubmit() {
    this.db.list(`/items/${this.auth.currentUserId}`).push({
      coin: this.coin,
      amount: this.amount,
      price:  this.price 
    });
    this.coin = '';
    this.amount ='';
    this.price  = '';
  }

  ngOnInit() {
    this.auth.getList()
    .subscribe(res => {
      this.hol = res;

      for( var o = 0; o <this.hol.length ; o++) {
        this.hol[o].coin = [{id: 2}]
      }
      for( var loo = 0; loo <this.hol.length ; loo++) {
        this.http.get<Coin>(`https://api.coinmarketcap.com/v1/ticker/${this.hol[loo].value.coin}/`)
        .subscribe(res => {
          
          this.pop = res;
          for( var q = 0; q < this.hol.length ; q++) {
            if(this.hol[q].value.coin == this.pop[0].id){
              this.hol[q].coin = this.pop;
            }
          }
          
        });
      }

      
      this.dataSource = new MatTableDataSource(this.hol);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data[0].key);
      let amount = this.hol.map(res => res.value.amount);
      let labels = this.hol.map(res => res.value.coin);
      let colors = this.hol.map(res => this.getRandomColor());

      this.chart = new Chart('canvas', {
        type: 'pie',
        data: {
          datasets: [{
              data: amount,
              backgroundColor: colors,
          }],
          labels: labels
        }
      });
    });
 
  }

  deleteItem(key: string): void {
    this.db.object('/items/' + this.auth.currentUserId + '/' + key).remove();
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private auth: AuthService) {
    super();
  }
  connect(): Observable<any> {
    return this.auth.getList();
  }
  disconnect() {}
}