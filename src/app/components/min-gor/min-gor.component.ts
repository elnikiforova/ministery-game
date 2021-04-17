import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-min-gor',
  templateUrl: './min-gor.component.html',
  styleUrls: ['./min-gor.component.css']
})
export class MinGORComponent implements OnInit, OnDestroy {
  wave: boolean = false;
  myCounter: number = 3;
  myCounter2: number = 2;
  sum: number = 0;
  audio: any;
  won: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  playAudio(num) {
    this.wave = true;
    let time = 2300;

    this.audio = new Audio();

    if (num === 1) {

      this.audio.src = '../../assets/VOX/13.mp3';

    } else if (num === 2) {

      this.audio.src = '../../assets/VOX/20.mp3';
      this.myCounter2 = this.myCounter2 + 5;

    } else if (num === 3) {

      this.audio.src = '../../assets/VOX/16.mp3';
      this.myCounter = this.myCounter + 1;

    } else if (num === 4) {

      this.audio.src = '../../assets/VOX/17.mp3';
      this.myCounter = this.myCounter + 1;

    } else if (num === 5) {

      this.audio.src = '../../assets/VOX/18.mp3';
      this.myCounter = this.myCounter - 2;

    } else if (num === 7) {

      this.audio.src = '../../assets/VOX/21.mp3';
      this.myCounter2 = this.myCounter2 - 5;

    } else if (num === 10) {
      this.audio.src = '../../assets/VOX/08.mp3';
    }

    this.audio.load();
    this.audio.play();

    setTimeout(() => {
      this.wave = false;
    }, time);
  }

  onMasked() {
    if (this.sum === 10) {

      this.playAudio(10);
      this.won = true;
    } else {

      this.playAudio(this.myCounter2);
      this.sum = this.sum + 1;

    }

  }

  onNotMasked() {
    this.playAudio(this.myCounter);
    this.sum = this.sum - 1;
  }
}
