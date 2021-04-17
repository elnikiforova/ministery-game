import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-zkh',
  templateUrl: './min-zkh.component.html',
  styleUrls: ['./min-zkh.component.css']
})
export class MinZKHComponent implements OnInit {
  mySwitch: number = 1;
  wave: boolean;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);
  }

  playAudio(num) {
    this.wave = true;
    let time = 2300;

    let audio = new Audio();

    if (num === 1) {
      audio.src = '../../assets/VOX/11.mp3';
      this.mySwitch = this.mySwitch + 1;
    } else if (num === 2) {
      audio.src = '../../assets/VOX/12.mp3';
      this.mySwitch = this.mySwitch - 1;
    } else if (num === 3) {
      audio.src = '../../assets/VOX/22.mp3';
    } else if (num === 4) {
      audio.src = '../../assets/VOX/25.mp3';
    } else if (num === 5) {
      audio.src = '../../assets/VOX/26.mp3';
      time = 5200;
    } else if (num === 6) {
      audio.src = '../../assets/VOX/19.mp3';
    }

    audio.load();
    audio.play();

    setTimeout(() => {
      this.wave = false;
    }, time);
  }

}
