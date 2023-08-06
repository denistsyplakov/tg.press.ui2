import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatInfo} from "../../../data/dto";
import {LeftPanelDataService} from "../../srv/left-panel-data.service";

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.less']
})
export class ChatDetailsComponent implements OnInit {

  chat: ChatInfo | undefined;

  constructor(private route: ActivatedRoute, private leftPanel: LeftPanelDataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      console.log("Loading Chat details", params["id"])
    );
  }
}
