import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnDestroy {
  t1: any;
  t2: any;
  t3: any;

  constructor() { }

  ngOnInit(): void {
    this.playAudio(1);

    // const t1 = setTimeout(() => {
    //   this.playAudio(2);

    //   const t2 = setTimeout(() => {
    //     this.playAudio(3);

    //     const t3 = setTimeout(() => {
    //       this.playAudio(4);
    //     }, 23000);

    //   }, 6000);

    // }, 5000);
  }

  ngOnDestroy(): void {
    // clearTimeout(this.t1);
    // clearTimeout(this.t2);
    // clearTimeout(this.t3);
  }

  playAudio(num) {
    let audio = new Audio();

    switch (num) {
      case 1:
        audio.src = '../../assets/VOX/01.mp3';
        break;
      case 2:
        audio.src = '../../assets/VOX/02.mp3';
        break;
      case 3:
        audio.src = '../../assets/VOX/03.mp3';
        break;
      case 4:
        audio.src = '../../assets/VOX/04.mp3';
        break;
      default:
        audio.src = '../../assets/VOX/01.mp3';
        break;
    }

    audio.load();
    audio.play();
  }
}
