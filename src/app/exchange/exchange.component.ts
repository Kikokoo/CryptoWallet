import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  newLog: string;
  
  constructor() {
    
  }

  ngOnInit() {
   
  }

  onChange(newLog){
    this.newLog = newLog;
    console.log(newLog);
  }

}
