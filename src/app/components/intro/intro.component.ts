import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio() {
    let audio = new Audio();
    audio.src = '../../assets/VOX/01.mp3';
    audio.load();
    audio.play();
  }

  playAudio2() {
    let audio2 = new Audio();
    audio2.src = '../../assets/VOX/02.mp3';
    audio2.load();
    audio2.play();
  }

  playAudio3() {
    let audio3 = new Audio();
    audio3.src = '../../assets/VOX/03.mp3';
    audio3.load();
    audio3.play();
  }

  playAudio4() {
    let audio4 = new Audio();
    audio4.src = '../../assets/VOX/04.mp3';
    audio4.load();
    audio4.play();
  }
}
