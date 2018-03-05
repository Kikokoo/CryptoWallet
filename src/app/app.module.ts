import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

import { CoinMarketCapService } from './shared/coinmarketcap.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WalletComponent } from './wallet/wallet.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoinsComponent } from './coins/coins.component';
import { SettingsComponent } from './settings/settings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WalletComponent,
    ExchangeComponent,
    NotfoundComponent,
    CoinsComponent,
    SettingsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CoinMarketCapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
