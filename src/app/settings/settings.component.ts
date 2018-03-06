import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/s.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	public newBack: string;
	ss: any;

	colors: string[] = ["#eee", "#660033", "#b00", "DarkSlateBlue ", "#090833", "#ff1caf", "#2e51cd"];
	backgrounds: string[] = ["../../assets/ddd.png", 
							"../../assets/ddd.png",
							"../../assets/ddd.png",
							"../../assets/ddd.png",
							"../../assets/ddd.png",
							"../../assets/ddd.png"];

	constructor(ss: SharedService) {
		this.ss = ss;
	}

	ngOnInit() {
	}

	changeBackground(col) {
		this.ss.change(col);
	}

}
