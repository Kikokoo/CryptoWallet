import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Coin } from '../shared/coin';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort} from '@angular/material';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  dataSource;
 
  itemValue = '';
  items: Observable<any[]>;
  displayedColumns = ['Coin', 'Amount', 'Buy Price', 'Current Price', '24h Change', '7d Change', 'Profit'];
  @ViewChild(MatSort) sort: MatSort;
  coin = '';
  amount = '';
  price = '';

  hol;


  pop;
 
  constructor(public db: AngularFireDatabase,  private auth: AuthService, private http: HttpClient) {
    this.items = db.list(`/items/${this.auth.currentUserId}`).valueChanges();
    this.auth.getList();
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

      console.log(this.hol);
      this.dataSource = new MatTableDataSource(this.hol);
      this.dataSource.sort = this.sort;
    console.log(this.dataSource);
    });

    
    console.log(this.hol);
    console.log(this.auth.currentUserId)

    
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