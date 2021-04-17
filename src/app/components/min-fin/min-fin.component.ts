import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-fin',
  templateUrl: './min-fin.component.html',
  styleUrls: ['./min-fin.component.css']
})
export class MinFINComponent implements OnInit {
  sum: number = 5000000;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(data: any) {
    this.sum = this.sum - data;
  }

  onReset() {
    this.sum = 5000000;
  }
}
