import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular-refresh-test';
}
