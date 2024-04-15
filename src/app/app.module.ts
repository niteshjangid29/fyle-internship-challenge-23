import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReposComponent } from './components/repos/repos.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoCardComponent,
    ProfileComponent,
    ReposComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ClipboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
