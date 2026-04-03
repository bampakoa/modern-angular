import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
    selector: 'app-player',
    template: '<youtube-player videoId="YOUR_VIDEO_ID" />',
    styleUrls: ['./player.component.css'],
    imports: [YouTubePlayer],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
