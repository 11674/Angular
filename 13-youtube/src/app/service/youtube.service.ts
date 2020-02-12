import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAJ6ZTPcIN7ZR79Tz5i2ipxxghulT3Q6zA';
  private playListId = 'UUyWThJMZwww85BDKIJuigew';
  private nextPageToken = '';

  constructor(public http: HttpClient) { }


  getVideos() {
    const url = `${this.url}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playListId)
      .set('key', this.apiKey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }
    return this.http.get(url, { params })
      .pipe(
        map((res: any) => {
          console.log(res);
          this.nextPageToken = res.nextPageToken;
          const videos: any[] = [];
          for (const video of res.items) {
            const video1 = video.snippet;
            videos.push(video1);
          }
          return videos;
        }),
    );
  }
}
