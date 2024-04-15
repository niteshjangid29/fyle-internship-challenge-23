import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userProfile: any = '';
  loadingUser: boolean = false;
  repositories: any = null;
  loadingRepos: boolean = false;

  page: number = 1;
  perPage: number = 10;
  totalRepositories: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
  onUserSearch(username: string) {
    this.loadingUser = true;
    this.userProfile = null;
    this.totalRepositories = 0;

    this.apiService.getUser(username).subscribe(
      (user: any) => {
        this.userProfile = user;
        this.loadingUser = false;
        this.totalRepositories = user.public_repos;
      },
      (error) => {
        console.error('Error fetching user: ', error);
        this.loadingUser = false;
      }
    );

    this.fetchRepositories(username);
  }

  fetchRepositories(username: string) {
    this.loadingRepos = true;
    this.repositories = [];

    this.apiService.getRepos(username, this.page, this.perPage).subscribe(
      (repos: any[]) => {
        this.repositories = repos;
        this.loadingRepos = false;
      },
      (error) => {
        this.loadingRepos = false;
      }
    );
  }

  onPageChanged(page: number) {
    this.page = page;
    const username = this.userProfile.login;
    this.fetchRepositories(username);
  }

  onPerPageChanged(perPage: number) {
    this.perPage = perPage;
    const username = this.userProfile.login;
    this.page = 1;
    this.fetchRepositories(username);
  }
}
