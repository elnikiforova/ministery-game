import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-min-zkh',
  templateUrl: './min-zkh.component.html',
  styleUrls: ['./min-zkh.component.css']
})
export class MinZKHComponent implements OnInit, OnDestroy {
  mySwitch: number = 1;
  wave: boolean;
  audio: any;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  playAudio(num) {

    this.audio = new Audio();
    this.wave = true;
    let time = 2300;

    if (num === 1) {

      this.audio.src = '../../assets/VOX/11.mp3';
      this.mySwitch = this.mySwitch + 1;

    } else if (num === 2) {

      this.audio.src = '../../assets/VOX/12.mp3';
      this.mySwitch = this.mySwitch - 1;

    } else if (num === 3) {

      this.audio.src = '../../assets/VOX/22.mp3';

    } else if (num === 4) {

      this.audio.src = '../../assets/VOX/25.mp3';

    } else if (num === 5) {

      this.audio.src = '../../assets/VOX/26.mp3';
      time = 5200;

    } else if (num === 6) {

      this.audio.src = '../../assets/VOX/19.mp3';

    } else if (num === 7) {

      this.audio.src = '../../assets/VOX/23.mp3';

    }

    this.audio.load();
    this.audio.play();

    setTimeout(() => {
      this.wave = false;
    }, time);
  }

}
