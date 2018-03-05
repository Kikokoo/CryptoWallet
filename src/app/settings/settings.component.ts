import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

public newBack: string;

  colors: string[] = ["#eee", "#ddd", "#b00", "#ccc", "#dadada", "#f0f0f0", "#2e51cd"];
  backgrounds: string[] = ["../../assets/ddd.png", 
                           "../../assets/ddd.png",
                           "../../assets/ddd.png",
                           "../../assets/ddd.png",
                           "../../assets/ddd.png",
                           "../../assets/ddd.png"];

  constructor() { }

  ngOnInit() {
  }

  onChangeBackground(backgroun){
    this.newBack = backgroun;
    console.log(backgroun);
  }
}
