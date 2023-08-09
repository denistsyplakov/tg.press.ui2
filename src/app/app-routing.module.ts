import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./cmp/about/about.component";
import {ChatListComponent} from "./cmp/chat-list/chat-list.component";
import {Page404Component} from "./cmp/page404/page404.component";
import {ChatDetailsComponent} from "./cmp/chat-details/chat-details.component";

const routes: Routes = [
  { path: '', component: ChatListComponent,title: 'Chat List' },
  { path: 'about', component: AboutComponent,title: 'About' },
  { path: 'chat-list', component: ChatListComponent,title: 'Chat List' },
  { path: 'chat/:id', component: ChatDetailsComponent,title: 'Chat Details' },
  { path: '**', component: Page404Component,title: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
