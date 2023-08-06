import { Component } from '@angular/core';
import {LeftPanelDataService} from "./srv/left-panel-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public leftPanel: LeftPanelDataService) {

  }


  get pinnedChats(){
    return this.leftPanel
  }

}
