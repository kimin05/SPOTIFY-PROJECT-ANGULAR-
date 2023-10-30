import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token = 'Bearer BQCgYL8PHwTao4UzVXIxbRzAV-spL-NYSGT-nasQaPZTDWLE80ZybV23HsFnOFr9WTDOeMd4RS2rtGW5kQWh0ZNu3rrdsNNaRptFvEXCVFT4RAFcOt7bE84zFbGtFI34NgMsS08swZNPNkB6jqE4_jSoz8SGtQc';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': this.token
    });
  }

  searchMusic(str: string, type = 'artist') {
    const offset = '0';
    const limit = '20';
    const market = 'US';
    const params = `?q=${str}&offset=${offset}&limit=${limit}&type=${type}&market=${market}`;
    const url = `https://api.spotify.com/v1/search${params}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getArtist(id: string): any {
    const query = `artists/${id}`;
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }
}
