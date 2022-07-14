import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-watch',
  templateUrl: './timer-watch.component.html',
  styleUrls: ['./timer-watch.component.scss'],
})

interface time {
  seconds: number;
  minutes: number;
  hours: number;
}

export class TimerWatchComponent {
  interval: any;
  time: time = { seconds: 0, minutes: 0, hours: 0 };
  ifStop: boolean;

  constructor() {
    this.ifStop = false;
    this.interval = setInterval(() => {
      this.time.seconds++;
      this.setTime();
    }, 0);
  }

  setTime() {
    if (this.time.seconds === 60) {
      this.time.seconds = 0;
      this.time.minutes++;
    }
    if (this.time.minutes === 60) {
      this.time.minutes = 0;
      this.time.hours++;
    }
    if (this.time.seconds > 10) {
      //need to change green color text to red color when left 10 seconds --> need help with that.
    if (
      this.time.seconds === 0 &&
      this.time.minutes === 0 &&
      this.time.hours === 0
    ) {
      this.playAudio();
    }
  }
  }

  handleInterval(command: string): void {
    if (command === 'stop' && !this.ifStop) {
      clearInterval(this.interval);
      this.ifStop = true;
    } else {
      this.interval = setInterval(() => {
        this.time.seconds++;
        this.setTime();
      }, 0);
      this.ifStop = false;
    }
  }

  reset() {
    this.ifStop = false;
    this.handleInterval('stop');
    this.time.seconds = 0;
    this.time.minutes = 0;
    this.time.hours = 0;
    this.ifStop = false;
  }

  start() {
    this.ifStop = false;
    this.handleInterval('stop');
    this.time.seconds = 0;
    this.time.minutes = 0;
    this.time.hours = 0;

    this.interval = setInterval(() => {
      this.time.seconds++;
      this.setTime();
    }, 0);
    this.ifStop = false;
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../../assets/audio/alert.mp3';
    audio.load();
    audio.play();
  }
}
