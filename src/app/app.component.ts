import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/s.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onMain: string;
  ss: any;
  subscription: any;

  constructor(ss: SharedService) {
      this.onMain = "green";
      this.ss = ss;
    }

    ngOnInit() {
      this.subscription = this.ss.getEmittedValue()
        .subscribe(item => this.onMain=item);
    }
}
