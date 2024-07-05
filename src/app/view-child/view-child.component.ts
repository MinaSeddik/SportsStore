import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TimerComponent} from "./timer/timer.component";

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [
    TimerComponent
  ],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit{

  @ViewChild('myTimer') timerComponent: TimerComponent;
  @ViewChild('myInput') myInput: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    if(this.timerComponent){
      this.timerComponent.startTimer()
    }

    if(this.myInput){
      this.myInput.nativeElement.focus();
    }
  }


  navigateTo(element: HTMLElement) {
    element.scrollIntoView();
  }
}
