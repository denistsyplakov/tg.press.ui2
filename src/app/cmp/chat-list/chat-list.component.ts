import {Component} from '@angular/core';
import {ClrDatagridStateInterface} from "@clr/angular";
import {ChatServiceService} from "../../srv/chat-service.service";
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.less']
})
export class ChatListComponent {

  chats: any[] = [];

  total: number = 0;

  loading: boolean = true;

  chatDetail: any = null;

  constructor(private chatService: ChatServiceService) {
  }

  refresh(state: ClrDatagridStateInterface) {
    console.log("refresh", state);
    this.loading = true;
    const size = state.page?.size == null ? 20 : state.page?.size;
    let offset = 0;
    let sortField = "member_count";
    let sortDirection = "desc";
    if (state.page?.current != null) {
      offset = (state.page?.current - 1) * size;
    }
    if (state.sort != null && typeof state.sort.by == 'string') {
      sortField = state.sort.by;
      sortDirection = state.sort.reverse ? "asc" : "desc"
    }
    let filterTitle = '';
    if (state.filters != null) {
      state.filters.forEach(line => {
        if (line.property == 'title') {
          filterTitle = line.value;
        }
      })
    }
    this.chatService.loadChats(sortField, sortDirection, offset, size, filterTitle)
      .subscribe(value => {
        this.chats = value.list;
        this.total = value.total;
        this.loading = false;
      });
  }

  set onDetail(detail:any){
    console.log("Loading more detail for:",detail);
    //make http req
  }

}


