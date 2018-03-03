import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../shared/coinmarketcap.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  cryptos: any;

  constructor(private CoinMarketCapService: CoinMarketCapService) { }

  ngOnInit() {
    this.CoinMarketCapService.getList()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
  }

}
