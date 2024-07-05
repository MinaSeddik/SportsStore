import {Component, signal} from '@angular/core';
import {SpinnerComponent} from "../spinner/spinner.component";


@Component({
  selector: 'app-view-spinner',
  standalone: true,
  imports: [
    SpinnerComponent
  ],
  templateUrl: './view-spinner.component.html',
  styleUrl: './view-spinner.component.css'
})
export class ViewSpinnerComponent {

  isLoading = signal<boolean>(true);
  RANDOM_STRING: string = "ABCDEFGHIJKLMNOPQRSTWVYZ";
  someData: string;

  constructor() {

    // simulate data loading
    setTimeout(() => {

      this.isLoading.set(true)
      this.someData = this.RANDOM_STRING.repeat(120)
      this.isLoading.set(false)
    }, 3000);
  }

  async reloadData() {
    this.isLoading.set(true)
    let shuffled: string = this.RANDOM_STRING.split('').sort(function () {
      return 0.5 - Math.random()
    }).join('');
    await this.delay(3000);
    this.someData = shuffled.repeat(120)
    this.isLoading.set(false)
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
