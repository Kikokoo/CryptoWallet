import { Routes } from "@angular/router";
import { WalletComponent } from "./wallet/wallet.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SettingsComponent } from "./settings/settings.component";
import { CoinsComponent } from "./coins/coins.component";
import { CoinComponent } from "./coins/coin/coin.component";
import { HomeComponent } from "./home/home.component";
import { GuidesComponent } from "./guides/guides.component";
import { TermsComponent } from "./guides/terms/terms.component";
import { BuyingComponent } from "./guides/buying/buying.component";
import { BinanceComponent } from "./guides/binance/binance.component";
import { ExchangesComponent } from "./guides/exchanges/exchanges.component";
import { TwoFaComponent } from "./guides/2fa/2fa.component";
import { WalletsComponent } from "./guides/wallets/wallets.component";
import { ShouldYouMineComponent } from "./guides/should-you-mine/should-you-mine.component";

import { AuthGuard } from './shared/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },

  { path: 'guides', component: GuidesComponent },
  { path: 'guides/terms', component: TermsComponent },
  { path: 'guides/buying', component: BuyingComponent },
  { path: 'guides/binance', component: BinanceComponent },
  { path: 'guides/exchanges', component: ExchangesComponent },
  { path: 'guides/2fa', component: TwoFaComponent },
  { path: 'guides/wallets', component: WalletsComponent },
  { path: 'guides/should-you-mine', component: ShouldYouMineComponent },


  { path: 'coins', component: CoinsComponent },
  { path: 'coins/:id', component: CoinComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: '**',  component: NotfoundComponent },
];
