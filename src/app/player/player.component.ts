import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player',
    template: '<youtube-player videoId="YOUR_VIDEO_ID" />',
    styleUrls: ['./player.component.css'],
    standalone: false
})
export class PlayerComponent implements OnInit {

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
