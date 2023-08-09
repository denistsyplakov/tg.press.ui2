import {Component} from '@angular/core';
import {LeftPanelDataService} from "./srv/left-panel-data.service";
import {Angulartics2GoogleAnalytics} from "angulartics2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public leftPanel: LeftPanelDataService, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }


  get pinnedChats() {
    return this.leftPanel
  }

}
