import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  
 
  itemValue = '';
  items: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase,  public auth: AuthService) {
    this.items = db.list(`/items/${this.auth.currentUserId}`).valueChanges();
  }
 
  onSubmit() {
    this.db.list(`/items/${this.auth.currentUserId}`).push({ content: this.itemValue, ko: this.itemValue + ' ki' });
    this.itemValue = '';
  }

  ngOnInit() {
    console.log(this.items)
    console.log(this.auth.currentUserId)
  }
  
}