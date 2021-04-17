import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-gor',
  templateUrl: './min-gor.component.html',
  styleUrls: ['./min-gor.component.css']
})
export class MinGORComponent implements OnInit {
  wave: boolean = false;
  myCounter: number = 3;
  sum: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);
  }

  playAudio(num) {
    this.wave = true;
    let time = 2300;

    let audio = new Audio();

    if (num === 1) {

      audio.src = '../../assets/VOX/13.mp3';

    } else if (num === 2) {

      audio.src = '../../assets/VOX/20.mp3';

    } else if (num === 3) {

      audio.src = '../../assets/VOX/16.mp3';
      this.myCounter = this.myCounter + 1;

    } else if (num === 4) {

      audio.src = '../../assets/VOX/17.mp3';
      this.myCounter = this.myCounter + 1;

    } else if (num === 5) {

      audio.src = '../../assets/VOX/18.mp3';
      this.myCounter = this.myCounter - 2;

    }

    audio.load();
    audio.play();

    setTimeout(() => {
      this.wave = false;
    }, time);
  }

  onMasked() {
    this.playAudio(2);
    this.sum = this.sum + 1;
  }

  onNotMasked() {
    this.playAudio(this.myCounter);
    this.sum = this.sum - 1;
  }

}
