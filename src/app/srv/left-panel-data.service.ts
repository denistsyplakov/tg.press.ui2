import {Injectable} from '@angular/core';
import {ChatInfo} from "../../data/dto";

@Injectable({
  providedIn: 'root'
})
export class LeftPanelDataService {

  constructor() {
  }


  private chats: { [id: number]: ChatInfo } = {}

  get pinnedChats(): ChatInfo[] {
    return Object.values(this.chats);
  }

  public togglePin(chat: ChatInfo) {
    if (!this.isPinned(chat.id)) {
      this.chats[chat.id] = chat;
    } else {
      console.log("Unpin")
      delete this.chats[chat.id];
    }
  }

  public isPinned(chatId: number) {
    return chatId in this.chats;
  }
}
