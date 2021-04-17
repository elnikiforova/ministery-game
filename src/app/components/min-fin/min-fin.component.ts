import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-min-fin',
  templateUrl: './min-fin.component.html',
  styleUrls: ['./min-fin.component.css']
})
export class MinFINComponent implements OnInit, OnDestroy {
  sum: number = 0;
  mySwitch: number = 0;
  wave: boolean;
  audio: any;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  onInput(data: any) {
    this.sum = this.sum + Number(data);

    if (this.sum < 0) {
      this.playAudio(3);
    } else if (this.sum > 0) {
      this.playAudio(2);
    } else if (this.sum === 0) {
      this.playAudio(4);
    }
  }

  onReset() {
    this.sum = 0;
  }

  playAudio(num) {
    this.wave = true;
    let time = 2300;

    this.audio = new Audio();

    if (num === 1) {
      this.audio.src = '../../assets/VOX/05.mp3';
      time = 4900;
      this.mySwitch = this.mySwitch + 1;
    } else if (num === 3) {
      this.audio.src = '../../assets/VOX/06.mp3';
    } else if (num === 2) {
      this.audio.src = '../../assets/VOX/07.mp3';
      this.mySwitch = this.mySwitch - 1;
    } else if (num === 4) {
      this.audio.src = '../../assets/VOX/08.mp3';
    }

    this.audio.load();
    this.audio.play();

    setTimeout(() => {
      this.wave = false;
    }, time);
  }
}
