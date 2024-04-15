import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<any> {
    const cachedUser = sessionStorage.getItem(`user_${githubUsername}`);
    if (cachedUser) {
      return of(JSON.parse(cachedUser));
    } else {
      return this.httpClient
        .get(`https://api.github.com/users/${githubUsername}`)
        .pipe(
          // tap((response: any) => {

          //   if (response.message === 'Not Found') {
          //     throwError('User not found');
          //   }
          // })
          tap((user: any) => {
            sessionStorage.setItem(
              `user_${githubUsername}`,
              JSON.stringify(user)
            );
          }),
          catchError((error) => {
            throw error;
          })
        );
    }
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params

  getRepos(
    githubUsername: string,
    page: number,
    per_page: number
  ): Observable<any> {
    const cachedRepos = sessionStorage.getItem(
      `repos_${githubUsername}_${page}_${per_page}`
    );

    if (cachedRepos) {
      return of(JSON.parse(cachedRepos));
    }
    return this.httpClient
      .get(
        `https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`
      )
      .pipe(
        // catchError((error) => {
        //   return throwError('Error fetching repositories');
        // })
        tap((repos: any) => {
          sessionStorage.setItem(
            `repos_${githubUsername}_${page}_${per_page}`,
            JSON.stringify(repos)
          );
        }),
        catchError((error) => {
          throw error;
        })
      );
  }
}
