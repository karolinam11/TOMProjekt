import { Component } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent {

  protected readonly devicePixelRatio = devicePixelRatio;
  protected readonly innerWidth = innerWidth;
  protected readonly innerHeight = innerHeight;
}
