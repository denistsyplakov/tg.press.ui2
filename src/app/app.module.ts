import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClarityModule} from "@clr/angular";
import { AboutComponent } from './cmp/about/about.component';
import { ChatListComponent } from './cmp/chat-list/chat-list.component';
import { Page404Component } from './cmp/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChatListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
