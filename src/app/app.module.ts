import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AngularFireModule } from 'angularfire2';

import { CoinMarketCapService } from './shared/coinmarketcap.service';

import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoinsComponent } from './coins/coins.component';
import { SettingsComponent } from './settings/settings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoinComponent } from './coins/coin/coin.component';
import { AuthComponent } from './auth/auth.component';

import { LoginDialog } from './app.component';
import { AuthGuard } from './shared/auth.guard';

import { AuthService } from './shared/auth.service';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GuidesComponent } from './guides/guides.component';
import { TermsComponent } from './guides/terms/terms.component';
import { BuyingComponent } from './guides/buying/buying.component';
import { WalletsComponent } from './guides/wallets/wallets.component';
import { ExchangesComponent } from './guides/exchanges/exchanges.component';
import { BinanceComponent } from './guides/binance/binance.component';
import { TwoFaComponent } from './guides/2fa/2fa.component';
import { ShouldYouMineComponent } from './guides/should-you-mine/should-you-mine.component';


import { AngularFireDatabaseModule } from 'angularfire2/database';
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBAEYNoAQxWF5KurjxdwNjo0eDnaxaKWXE",
    authDomain: "cryptowallet-5e40a.firebaseapp.com",
    databaseURL: "https://cryptowallet-5e40a.firebaseio.com",
    projectId: "cryptowallet-5e40a",
    storageBucket: "cryptowallet-5e40a.appspot.com",
    messagingSenderId: "228816623996"
};

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    ExchangeComponent,
    NotfoundComponent,
    CoinsComponent,
    SettingsComponent,
    PortfolioComponent,
    HomeComponent,
    CoinComponent,
    AuthComponent,
    LoginDialog,
    GuidesComponent,
    TermsComponent,
    BuyingComponent,
    WalletsComponent,
    ExchangesComponent,
    BinanceComponent,
    TwoFaComponent, ShouldYouMineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule, // for database
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [CoinMarketCapService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialog]
})
export class AppModule { }
