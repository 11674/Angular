import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSel: any;
  constructor(private youtubeS: YoutubeService) {
    this.youtubeS.getVideos()
      .subscribe(videos => {
        console.log(videos);
        this.videos = videos;
      });
  }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.videoSel = video;
    $('#myModal').modal();

  }

  cerrarModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }
  cargarMas() {
    this.youtubeS.getVideos()
      .subscribe(videos => this.videos.push.apply(this.videos, videos));
  }
}
