import {Component, ViewChild, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {PanelService} from "../panel.service";

@Component({
  selector: 'app-take-a-picture',
  templateUrl: './take-a-picture.component.html',
  styleUrls: ['./take-a-picture.component.css']
})
export class TakeAPictureComponent{
  // @ts-ignore
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  // @ts-ignore
  @ViewChild('canvas') canvas: ElementRef;
  // @ts-ignore
  @ViewChild('image') image: ElementRef;
  show: boolean = false;

  constructor(private router: Router,
              private panelService: PanelService){
  }
  takePicture() {
    const video = this.videoPlayer.nativeElement;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    const image = this.image.nativeElement;

// Use the getUserMedia() method of the WebRTC API to access the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // Set the source of the video element to the camera stream
        video.srcObject = stream;
        video.play();

        // When the user clicks the button, capture a picture from the video feed
        const capturePicture = () => {
          this.show = true;
          // Set the width and height of the canvas to match the natural dimensions of the video element
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          // Draw the current frame of the video feed onto the canvas
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Stop the camera stream
          stream.getTracks().forEach(track => track.stop());

          // Convert the canvas image to a data URL and set it as the src of the image element
          const dataUrl = canvas.toDataURL('image/jpeg');
          image.src = dataUrl;

          // Set the value of the file input element to the data URL
          const fileInput = document.getElementById('uploadFile');
          // @ts-ignore
          fileInput.value = dataUrl;
        };


        // @ts-ignore
        document.getElementById('takePictureButton').addEventListener('click', capturePicture);
      })
      .catch(error => console.error(error));

  }

  sendPicture(){
    if (confirm("Czy na pewno chcesz wysłać to zdjęcie?")) {
      this.panelService.nextPicture = 7;
      const video = this.videoPlayer.nativeElement;
      const stream = video.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      this.router.navigate(['panel'])
    } else {
      alert("Wysyłanie zdjęcia zostało anulowane")
    }
  }

  sendPicture2(){
    if (confirm("Czy na pewno chcesz wysłać to zdjęcie?")) {
      this.router.navigate(['panel'])
    } else {
      alert("Wysyłanie zdjęcia zostało anulowane")
    }
  }

}
