import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnDestroy {
  audio: any;

  constructor() { }

  ngOnInit(): void {
    // console.log('hhhhh');

    // setTimeout(() => {
    //   this.playAudio(1);
    // }, 100)



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

  playAudio(num: number) {
    this.audio = new Audio();

    if (num === 1) {

      this.audio.src = '../../assets/VOX/01.mp3';

    } else if (num === 2) {

      this.audio.src = '../../assets/VOX/02.mp3';

    } else if (num === 3) {

      this.audio.src = '../../assets/VOX/03.mp3';

    } else if (num === 4) {

      this.audio.src = '../../assets/VOX/04.mp3';

    }

    this.audio.load();
    this.audio.play();

  }
}
