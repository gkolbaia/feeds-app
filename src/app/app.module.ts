import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FeedListComponent } from './modules/feed/components/feed-list/feed-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsBoardComponent } from './modules/feed/components/news-board/news-board.component';
import { PostPageComponent } from './modules/feed/components/post-page/post-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedListComponent,
    NewsBoardComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
