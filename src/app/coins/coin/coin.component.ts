import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ChasingCoinsService } from '../../shared/chasing-coins.service';
import { CoinMarketCapService } from '../../shared/coinmarketcap.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
  providers: [ChasingCoinsService]
})
export class CoinComponent implements OnInit {
  private currentCoin: any;
  selected = 'USD';
  cryptos: any;
  coinHeat: any;

  constructor(private route: ActivatedRoute,
              private ChasingCoinsService: ChasingCoinsService,
              private CoinMarketCapService: CoinMarketCapService) {
    
    this.route.params.subscribe( params => {
      this.currentCoin = params.id;
      console.log(params, this.currentCoin);
    } );

    this.CoinMarketCapService.getCoin(this.currentCoin)
    .subscribe(res => {
      this.cryptos = res;
      
    });
  }

  getConvertCoin(deviceValue) {
    console.log(deviceValue);
    this.CoinMarketCapService.getConvertCoin(this.currentCoin, deviceValue)
    .subscribe(res => {
      this.cryptos = res;
      
      console.log(this.cryptos)
    });
  }
  
  ngOnInit() {
  }

}
