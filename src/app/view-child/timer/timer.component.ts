import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  timer: number = 0

  startTimer() {
    setInterval(() => this.timer++);
  }
}
