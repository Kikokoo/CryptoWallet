import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  constructor() { }

  ngOnInit() {
  }
  addPhone(title: string, price: number, company: string){
    this.phones.push(new Phone(title, price, company));
}
onChange(newLog){
  console.log(newLog);
}


}
export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}