import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {GridResult} from "../../data/dto";

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) {
  }

  public loadChats(
    sortField: string,
    sortDirection: string,
    offset: number,
    limit: number,
    filterTitle: string): Observable<GridResult> {
    console.log(`Loading chats, offset: ${offset}, limit: ${limit}, sortField: ${sortField}, filterTitle: ${filterTitle}`);
    return this.http.get<GridResult>(`http://localhost:8080/chat/list?limit=${limit}&offset=${offset}&sort=${sortField}&sortDirection=${sortDirection}&filterTitle=${filterTitle}`);
  }


}
