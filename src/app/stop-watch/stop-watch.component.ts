import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
})

interface time {
  milliSeconds: number;
  seconds: number;
  minutes: number;
  hours: number;
}

export class StopWatchComponent {
  interval: any;
  time: time = { milliSeconds: 0, seconds: 0, minutes: 0, hours: 0 };
  ifStop: boolean;

  constructor() {
    this.ifStop = false;
    this.interval = setInterval(() => {
      this.time.milliSeconds++;
      this.setTime();
    }, 0);
  }
  setTime() {
    if (this.time.milliSeconds === 1000) {
      this.time.milliSeconds = 0;
      this.time.seconds++;
    }
    if (this.time.seconds === 60) {
      this.time.seconds = 0;
      this.time.minutes++;
    }
    if (this.time.minutes === 60) {
      this.time.minutes = 0;
      this.time.hours++;
    }
  }
  handleInterval(command: string): void {
    if (command === 'stop' && !this.ifStop) {
      clearInterval(this.interval);
      this.ifStop = true;
    } else {
      this.interval = setInterval(() => {
        this.time.milliSeconds++;
        this.setTime();
      }, 0);
      this.ifStop = false;
    }
  }
  reset() {
    this.ifStop = false;
    this.handleInterval('stop');
    this.time.milliSeconds = 0;
    this.time.seconds = 0;
    this.time.minutes = 0;
    this.time.hours = 0;
    this.ifStop = false;
  }
  start() {
    this.ifStop = false;
    this.handleInterval('stop');

    this.time.milliSeconds = 0;
    this.time.seconds = 0;
    this.time.minutes = 0;
    this.time.hours = 0;

    this.interval = setInterval(() => {
      this.time.milliSeconds++;
      this.setTime();
    }, 0);
    this.ifStop = false;
  }
}
