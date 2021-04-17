import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  wave: boolean;
  audio: any;

  constructor() {

  }

  ngOnInit(): void {
    this.playAudio();
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  playAudio() {
    this.wave = true;

    this.audio = new Audio();
    this.audio.src = '../../assets/VOX/09.mp3';
    this.audio.load();
    this.audio.play();

    setTimeout(() => {
      this.wave = false;
    }, 5000);
  }

}
