import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-zkh',
  templateUrl: './min-zkh.component.html',
  styleUrls: ['./min-zkh.component.css']
})
export class MinZKHComponent implements OnInit {
  wave: boolean;

  constructor() { }

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio() {
    this.wave = true;

    let audio = new Audio();
    audio.src = '../../assets/VOX/11.mp3';
    audio.load();
    audio.play();

    setTimeout(() => {
      this.wave = false;
    }, 2300);
  }
}
