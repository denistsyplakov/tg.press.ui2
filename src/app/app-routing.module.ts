import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./cmp/about/about.component";
import {ChatListComponent} from "./cmp/chat-list/chat-list.component";
import {Page404Component} from "./cmp/page404/page404.component";

const routes: Routes = [
  { path: '', component: ChatListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chat-list', component: ChatListComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
