
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Game {
  private apiUrl = 'https://con-api-dev-gh.supremegames.com/api/landing-page';

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
