import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wave: boolean;

  constructor() { }

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio() {
    this.wave = true;

    let audio = new Audio();
    audio.src = '../../assets/VOX/09.mp3';
    audio.load();
    audio.play();

    setTimeout(() => {
      this.wave = false;
    }, 5000);
  }

}
