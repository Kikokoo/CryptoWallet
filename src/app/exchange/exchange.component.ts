import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../shared/coinmarketcap.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  cryptos: any;

  constructor(private CoinMarketCapService: CoinMarketCapService) {
    
  }


  ngOnInit() {
    this.CoinMarketCapService.getList()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }

}

