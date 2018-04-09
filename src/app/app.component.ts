import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onMain: string;
  ss: any;
  subscription: any;
  themeClass = localStorage.getItem('classNameTheme');

  constructor() {
    }

    changeTheme(theme) {
      this.themeClass = theme;
      localStorage.setItem('classNameTheme', theme);
    }

    ngOnInit() {
      
    }
}
