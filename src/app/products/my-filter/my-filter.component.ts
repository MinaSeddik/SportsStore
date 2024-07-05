import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-filter',
  standalone: true,
  imports: [],
  templateUrl: './my-filter.component.html',
  styleUrl: './my-filter.component.css'
})
export class MyFilterComponent {

  @Input("myFilter") myFilter: string;

  @Output("myFilterChange") myFilterChange = new EventEmitter<string>();

  @HostListener('keyup', ['$event'])
  public onKeyup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    console.log(`event received: ${value}`)
    this.myFilterChange.emit(value);
  }

}
