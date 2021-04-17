import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-fin',
  templateUrl: './min-fin.component.html',
  styleUrls: ['./min-fin.component.css']
})
export class MinFINComponent implements OnInit {
  sum: number = 5000000;
  mySwitch: number = 0;
  wave: boolean;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);
  }

  onInput(data: any) {
    this.sum = this.sum - data;

    if (this.sum < 0) {
      this.playAudio(3);
    }
  }

  onReset() {
    this.sum = 5000000;
  }

  playAudio(num) {
    this.wave = true;
    let time = 2300;

    let audio = new Audio();

    if (num === 1) {
      audio.src = '../../assets/VOX/05.mp3';
      time = 4900;
      this.mySwitch = this.mySwitch + 1;
    } else if (num === 3) {
      audio.src = '../../assets/VOX/06.mp3';
    } else if (num === 2) {
      audio.src = '../../assets/VOX/07.mp3';
      this.mySwitch = this.mySwitch - 1;
    }

    audio.load();
    audio.play();

    setTimeout(() => {
      this.wave = false;
    }, time);
  }
}
