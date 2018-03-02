import { Routes } from "@angular/router";
import { WalletComponent } from "./wallet/wallet.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { NotfoundComponent } from "./notfound/notfound.component";

export const routes: Routes = [
  { path: '', redirectTo: 'wallet', pathMatch: 'full' },
  { path: 'wallet', component: WalletComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: '**',  component: NotfoundComponent },
];
