import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'te-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent implements OnInit {
  @Input() appVersion: string;
  _appVersion: string;

  ngOnInit() {
    this._appVersion = 'Version: 1.0.0';
  }
}
