import { Routes } from "@angular/router";
import { WalletComponent } from "./wallet/wallet.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SettingsComponent } from "./settings/settings.component";
import { CoinsComponent } from "./coins/coins.component";
import { CoinComponent } from "./coins/coin/coin.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'coins/:id', component: CoinComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: '**',  component: NotfoundComponent },
];
