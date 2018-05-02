import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  themeClass = localStorage.getItem('classNameTheme');

  constructor(public dialog: MatDialog, public auth: AuthService) {
    }

    changeTheme(theme) {
      this.themeClass = theme;
      localStorage.setItem('classNameTheme', theme);
    }

    openDialog() {
      this.dialog.open(LoginDialog, {
        data: {
          animal: 'panda'
        }
      });
    }

    ngOnInit() {
      
    }
}

@Component({
  selector: 'app-auth',
  templateUrl: 'auth/auth.component.html',
})
export class LoginDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
